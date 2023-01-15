import axios, { AxiosRequestConfig } from 'axios';

import { BASE_PATH } from 'src/client/shared/utils/environment';
import { UNPROTECTED_PATHS } from './constants';
import { getAuthToken } from './renewToken';

const DEFAULT_HEADERS = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
};

export async function fetch<T>(
    path: string,
    options: AxiosRequestConfig = {}
): Promise<T> {
    const { method = 'GET', headers = {}, ...restOptions } = options;

    // Если нужна авторизация для эндпоинта
    if (!UNPROTECTED_PATHS.includes(path)) {
        const token = getAuthToken();

        // TODO: сделать редирект на логин?
        if (!token) {
            throw Error('not logged in');
        }
        headers['Authorization'] = `Authorization: Bearer ${token}`;
    }

    const config: AxiosRequestConfig = {
        baseURL: BASE_PATH,
        headers: {
            ...DEFAULT_HEADERS,
            ...headers,
        },
        method,
        ...restOptions,
    };

    try {
        const response = await axios(path, config);

        return response.data;
    } catch (error) {
        throw error;
    }
}
