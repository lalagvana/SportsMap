import { useCallback, useContext } from 'react';
import { useRouter } from 'next/router';
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
                setClientConfig({ ...clientConfig, token: res.AccessToken });

                await router.replace(pageRoutes.search);
            } catch (error) {
                throw error;
            }
        },
        [router, clientConfig, setClientConfig]
    );
};
