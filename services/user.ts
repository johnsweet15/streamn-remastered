import Request from './request';
import { AxiosResponse, AxiosError } from 'axios';
import { User } from '../interfaces/user';
// import { LoginResponse } from '../interfaces/responses';

const request = new Request();

export const getUserData = (
  profileId: string,
  sessionToken: string
): Promise<[AxiosResponse<User> | null, AxiosError | null]> => {
  return request.get('/profile/profile', {
    params: { profileId, sessionToken },
  });
};
