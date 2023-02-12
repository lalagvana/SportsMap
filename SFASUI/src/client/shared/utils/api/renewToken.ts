import { getCookie, hasCookie, setCookie } from 'cookies-next';

import { refreshToken } from './login';

export const getAuthToken = () => {
    const isExpired = !hasCookie('sportsmap_expiresIn');

    if (isExpired) {
        const oldTokenValue = getCookie('sportsmap_token') as string | undefined;
        const refreshTokenValue = getCookie('sportsmap_refreshToken') as string | undefined;

        if (oldTokenValue && refreshTokenValue) {
            try {
                const newTokenValue = refreshToken({
                    access_token: oldTokenValue,
                    refresh_token: refreshTokenValue,
                });

                setCookie('sportsmap_token', newTokenValue, { httpOnly: true });
            } catch (e) {
                throw Error(e);
            }
        }
    }

    return getCookie('sportsmap_token');
};
