import axios, { AxiosRequestConfig } from 'axios';
import { API_BASE_URL } from './app.config';

/**
 * HTTP客户端
 */
export const apiHttpClient = axios.create({
  baseURL: API_BASE_URL as string,
} as AxiosRequestConfig);
