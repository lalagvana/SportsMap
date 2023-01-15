import { getCookie, hasCookie, setCookie } from 'cookies-next';

import { refreshToken } from './login';

export const getAuthToken = () => {
    const isExpired = !hasCookie('expiresIn');

    if (isExpired) {
        const oldTokenValue = getCookie('token') as string | undefined;
        const refreshTokenValue = getCookie('refreshToken') as
            | string
            | undefined;

        if (oldTokenValue && refreshTokenValue) {
            const newTokenValue = refreshToken({
                access_token: oldTokenValue,
                refresh_token: refreshTokenValue,
            });
            setCookie('token', newTokenValue, { httpOnly: true });
        }
    }

    return getCookie('token');
};
