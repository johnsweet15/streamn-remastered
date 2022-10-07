import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import YouTube, { YouTubeEvent, YouTubeProps } from 'react-youtube';
import { io, Socket } from 'socket.io-client';
import { API_URL } from '../../config/config';
import { SOCKET_EVENTS } from '../../config/constants';
import { RootState } from '../../state/reducers';
import { User } from '../../interfaces/user';
import { getCookies } from '../../utils/auth';
import { Lobby } from '../../interfaces/lobby';
import {
  JoinRoomResponse,
  LobbyConnectionResponse,
} from '../../interfaces/responses';

const Lobby: NextPage = () => {
  const router = useRouter();

  const [socket, setSocket] = useState<Socket>();
  const [lobby, setLobby] = useState<Lobby>();
  const [videoStartTime, setVideoStartTime] = useState<string | null>();

  const user = useSelector<RootState>((state) => state.user) as User;

  useEffect(() => {
    const lobbySocket = io(`${API_URL}/lobby`, {
      transports: ['websocket'],
    });
    setSocket(lobbySocket);
  }, []);

  useEffect(() => {
    // wait for all important initializations to finish before setting up lobby
    if (socket && router.query.id && user) {
      setupLobby();
    }
  }, [socket, router.query.id, user]);

  const setupLobby = () => {
    socket?.on(SOCKET_EVENTS.GLOBAL_JOIN_ROOM_EVENT_RESPONSE, (data) =>
      handleJoinSocketResponse(data)
    );

    socket?.on(SOCKET_EVENTS.LOBBY_CONNECTION_EVENT_RESPONSE, (data) =>
      handleLobbyConnectionResponse(data)
    );

    setSocket(socket);

    socket?.emit(SOCKET_EVENTS.GLOBAL_JOIN_ROOM_EVENT_REQUEST, {
      ownerUsername: 'username217',
      lobbyName: router.query.id,
    });
  };

  const handleJoinSocketResponse = (data: JoinRoomResponse) => {
    const { profileId, sessionToken } = getCookies();
    const { username } = user;

    socket?.emit(SOCKET_EVENTS.LOBBY_CONNECTION_EVENT_REQUEST, {
      profileId: profileId,
      sessionToken: sessionToken,
      username: username,
      ownerUsername: 'username217',
      lobbyName: router.query.id,
    });
  };

  const handleLobbyConnectionResponse = (data: LobbyConnectionResponse) => {
    setLobby(data.lobby);
  };

  const onPlayerPause = (event: YouTubeEvent<number>) => {
    event.target.playVideo();
  };
  const onReady = (event: YouTubeEvent<number>) => {
    event.target.setVolume(20);
  };

  const opts: YouTubeProps['opts'] = {
    width: '1920px',
    height: '1080px',
    playerVars: {
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      rel: 0,
      start: videoStartTime || 0,
      iv_load_policy: 3,
      allow: 'autoplay',
    },
  };

  return (
    <div>
      {lobby?.currentVideo.videoId && (
        <YouTube
          videoId={lobby.currentVideo.videoId}
          opts={opts}
          onReady={onReady}
          onPause={onPlayerPause}
          // onEnd={this.handleEndingVideo}
          // onStateChange={onPlayerStateChange}
          // onError={this.onPlayerError}
        />
      )}
    </div>
  );
};

export default Lobby;
