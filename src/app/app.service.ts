import axios, { AxiosRequestConfig } from 'axios';
import { API_BASE_URL } from './app.config';
import { io } from 'socket.io-client';

/**
 * HTTP客户端
 */
export const apiHttpClient = axios.create({
  baseURL: API_BASE_URL as string,
} as AxiosRequestConfig);

/**
 *Socket
 */
export const socket = io(API_BASE_URL);
