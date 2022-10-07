export interface Profile {
  createdLobbies: LobbySimple[];
  currentPlaylist: string;
  email: string;
  followedLobbies: LobbySimple[];
  pictureURL?: string;
  playlists: string[];
  profileId: string;
  recentLobbies: LobbySimple[];
  username: string;
}

export interface ProfileSession {
  connectedLobbies: LobbySimple[];
  profileId: string;
  sessionCreationTS: string;
  sessionExpirationTS: string;
  sessionToken: string;
}

export interface LobbySimple {
  lobbyId: string;
  lobbyName: string;
  lobbyOwner?: string;
}

export interface User extends Profile {}
export type UserState = User | {};
