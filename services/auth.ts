// import { MovieDetails, PopularMoviesResult, TMDBResponse } from '../interfaces/tmdb';
import Request from './request';
import { AxiosResponse, AxiosError } from 'axios';
import { LoginResponse } from '../interfaces/responses';

const request = new Request();

export const googleLogin = (
  tokenId: string
): Promise<[AxiosResponse<LoginResponse> | null, AxiosError | null]> => {
  return request.post('/login/google', { idToken: tokenId });
};

// export const getMovieDetails = (id: number | string): Promise<TMDBResponse<MovieDetails>> => {
//   return request.get(`/movie/${id}`);
// };
