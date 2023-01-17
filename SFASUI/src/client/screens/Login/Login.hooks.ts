import { useCallback, useContext } from 'react';
import { useRouter } from 'next/router';
import { setCookie } from 'cookies-next';

import { pageRoutes } from 'src/client/shared/routes';
import { ClientConfigContext } from 'src/client/shared/contexts/client-config';
import { login } from 'src/client/shared/utils/api/login';

import { LoginFields, createLoginUser } from '.';

export const useLoginHandler = () => {
    const router = useRouter();
    const { clientConfig, setClientConfig } = useContext(ClientConfigContext);

    return useCallback(
        async (fields: LoginFields) => {
            try {
                const res = await login(createLoginUser(fields));

                const { access_token, access_token_expires_in, refresh_token } =
                    res;
                setCookie('token', access_token, { httpOnly: true });
                setCookie('expiresIn', access_token_expires_in, {
                    httpOnly: true,
                    maxAge: access_token_expires_in,
                });
                setCookie('refreshToken', refresh_token), { httpOnly: true };

                await router.replace(pageRoutes.search);
            } catch (error) {
                throw error;
            }
        },
        [router, clientConfig, setClientConfig]
    );
};
