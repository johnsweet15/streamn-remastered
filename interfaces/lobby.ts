export interface Lobby {
  connectedUsers: ConnectedUser[];
  currentDJ: string;
  currentVideo: CurrentVideo;
  djQueue: string[];
  leftDuringVideo: string[];
  lobbyId: string;
  lobbyName: string;
  lobbySettings: LobbySettings;
  lobbyType: 1 | 2;
  ownerProfileId: string;
  ownerUsername: string;
  profilesFollowingLobby: string[];
  totalView: number;
  _id: string;
}

export interface ConnectedUser {
  requestId: string;
  profileId?: string;
  username?: string;
}

export interface CurrentVideo {
  channelName: string;
  duration: string;
  videoId: string;
  videoTitle: string;
  _id: string;
}

export interface LobbySettings {
  isPrivate: boolean;
  maxConcurrent: number;
  tags: string[];
}
