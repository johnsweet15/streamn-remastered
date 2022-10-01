// import { MovieDetails, PopularMoviesResult, TMDBResponse } from '../interfaces/tmdb';
import Request from './request';
import { AxiosResponse, AxiosError } from 'axios';
import { LoginResponse } from '../interfaces/responses';
import { CreateAccountRequest } from '../interfaces/requests';

const request = new Request();

/**
 * @summary: /login/google
 * @param tokenId Google token
 * @returns
 */
export const googleLogin = (
  tokenId: string
): Promise<[AxiosResponse<LoginResponse> | null, AxiosError | null]> => {
  return request.post('/login/google', { idToken: tokenId });
};

/**
 * @summary: /profile/createAccount
 * @param body Create account body
 * @returns
 */
export const createAccount = (
  body: CreateAccountRequest
): Promise<[AxiosResponse<any> | null, AxiosError | null]> => {
  return request.post('/profile/createAccount', body);
};
