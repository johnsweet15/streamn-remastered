import { Lobby } from './lobby';
import { Profile, ProfileSession } from './user';

export interface LoginResponse {
  accExist: boolean;
  googleEmail: string;
  googleFirstName: string;
  googleId: string;
  googleLastName: string;
  googlePictureURL: string;
  profile: Profile;
  profileSession: ProfileSession;
}

export interface CreateAccountResponse {
  profileId: string;
  profileSession: ProfileSession;
  success: boolean;
}

export interface JoinRoomResponse {
  requestId: string;
  room: string;
}

export interface LobbyConnectionResponse {
  lobby: Lobby;
  videoStartTime?: string;
}
