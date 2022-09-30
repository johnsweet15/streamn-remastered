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