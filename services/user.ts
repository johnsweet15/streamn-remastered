import Request from './request';
import { AxiosResponse, AxiosError } from 'axios';
import { User } from '../interfaces/user';
// import { LoginResponse } from '../interfaces/responses';

const request = new Request();

/**
 * @summary /profile/profile?profileId={profileId}&sessionToken={sessionToken}
 * @param profileId
 * @param sessionToken
 * @returns User profile
 */
export const getUserDataRequest = (
  profileId: string,
  sessionToken: string
): Promise<[AxiosResponse<User> | null, AxiosError | null]> => {
  return request.get('/profile/profile', {
    params: { profileId, sessionToken },
  });
};
