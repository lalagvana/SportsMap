import axios, { RawAxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';

import { Notification } from 'src/client/shared/components/Notification';
import { BASE_PATH } from 'src/client/shared/utils/environment';
import { prepareMessage } from 'src/client/shared/utils/notifications';

import { UNPROTECTED_PATHS } from './constants';
import { getAuthToken } from './renewToken';

const DEFAULT_HEADERS = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
};

export async function fetch<T>(path: string, options: RawAxiosRequestConfig = {}, skipValidation = false): Promise<T> {
    const { method = 'GET', headers = {}, ...restOptions } = options;

    // Если нужна авторизация для эндпоинта
    if (!UNPROTECTED_PATHS.includes(path) && method.toUpperCase() !== 'GET' && !skipValidation) {
        const token = await getAuthToken();

        // TODO: сделать редирект на логин?
        if (!token) {
            toast(<Notification type="error" imageType="cross" description="Вы не авторизованы" />);

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
            toast(
                <Notification
                    type="error"
                    imageType="cross"
                    description={prepareMessage(error, 'Произошла ошибка во время получения данных')}
                />
            );
        }

        throw error;
    }
}
