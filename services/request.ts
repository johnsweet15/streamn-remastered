import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  AxiosInstance,
} from 'axios';
import { API_URL } from '../config';

export default class Request {
  private service: AxiosInstance;

  constructor() {
    const apiKey = process.env.NEXT_PUBLIC_TMDB_TOKEN;
    const params = apiKey ? { api_key: apiKey } : null;
    this.service = axios.create({
      baseURL: API_URL,
      params,
    });
  }

  get = async (
    url: string,
    config?: AxiosRequestConfig
  ): Promise<[AxiosResponse<any> | null, AxiosError<any> | null]> => {
    try {
      const response: AxiosResponse<any> = await this.service.get(url, config);
      return [response, null];
    } catch (error: any | null) {
      return [null, error];
    }
  };

  post = async (
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<[AxiosResponse<any> | null, AxiosError<any> | null]> => {
    try {
      const response: AxiosResponse<any> = await this.service.post(
        url,
        data,
        config
      );
      return [response, null];
    } catch (error: any | null) {
      return [null, error];
    }
  };
}
