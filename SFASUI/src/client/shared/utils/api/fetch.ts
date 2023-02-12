import axios, { RawAxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';

import { BASE_PATH } from 'src/client/shared/utils/environment';
import { UNPROTECTED_PATHS } from './constants';
import { getAuthToken } from './renewToken';
import { prepareMessage } from '../notifications';

const DEFAULT_HEADERS = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
};

export async function fetch<T>(path: string, options: RawAxiosRequestConfig = {}): Promise<T> {
    const { method = 'GET', headers = {}, ...restOptions } = options;

    // Если нужна авторизация для эндпоинта
    if (!UNPROTECTED_PATHS.includes(path)) {
        const token = getAuthToken();

        // TODO: сделать редирект на логин?
        if (!token) {
            toast.error(`Вы не авторизованы, пожалуйста, войдите в аккаунт`);

            throw Error('not logged in');
        }

        headers['Authorization'] = `Bearer ${token}`;
    }

    const config: RawAxiosRequestConfig = {
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
        // Ошибки GET больше нигде не нотифицируются
        if (method.toUpperCase() === 'GET') {
            toast.error(prepareMessage(error, 'Произошла ошибка во время получения данных'));
        }

        throw error;
    }
}
