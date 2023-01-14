import axios, { AxiosRequestConfig } from 'axios';

import { BASE_PATH } from 'src/client/shared/utils/environment';

const DEFAULT_HEADERS = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
};

export async function fetch<T>(
    path: string,
    options: AxiosRequestConfig = {},
    token: string = ''
): Promise<T> {
    const { method = 'GET', headers = {}, ...restOptions } = options;

    if (token) {
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
