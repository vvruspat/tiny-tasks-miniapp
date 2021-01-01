import { authData } from '../constants/config';

export const server = 'https://localhost:5000';

export const authParams = JSON.stringify(authData);
export const requestHeaders: HeadersInit = new Headers();

requestHeaders.set('Content-Type', 'application/json');
requestHeaders.set('x-auth-params', authParams);
