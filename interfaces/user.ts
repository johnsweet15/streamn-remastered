export interface Profile {
  createdLobbies: Lobby[];
  currentPlaylist: string;
  email: string;
  followedLobbies: Lobby[];
  pictureURL?: string;
  playlists: string[];
  profileId: string;
  recentLobbies: Lobby[];
  username: string;
}

export interface ProfileSession {
  connectedLobbies: Lobby[];
  profileId: string;
  sessionCreationTS: string;
  sessionExpirationTS: string;
  sessionToken: string;
}

export interface Lobby {
  lobbyId: string;
  lobbyName: string;
  lobbyOwner?: string;
}

export interface User extends Profile {}
export type UserState = User | {};
