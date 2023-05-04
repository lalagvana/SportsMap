import React, { useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';
import { setCookie } from 'cookies-next';
import { toast } from 'react-toastify';

import { pageRoutes } from 'src/client/shared/routes';
import { login, register } from 'src/client/shared/utils/api/login';
import { prepareMessage } from 'src/client/shared/utils/notifications';

import { LoginFields, createLoginUser, LoginForm } from './components/LoginForm';
import { RegisterForm, RegisterFormField, createRegisterUser } from './components/RegisterForm';

import styles from './Login.module.css';

export const useLoginHandler = () => {
    const router = useRouter();

    return useCallback(
        async (fields: LoginFields) => {
            try {
                const res = await login(createLoginUser(fields));
                const { access_token, access_token_expires_in, refresh_token } = res;
                setCookie('sportsmap_token', access_token);
                setCookie('sportsmap_expiresIn', access_token_expires_in, {
                    maxAge: access_token_expires_in,
                });
                setCookie('sportsmap_refreshToken', refresh_token);

                toast.success('Вы успешно вошли в аккаунт');
                await router.replace(pageRoutes.search);
            } catch (error) {
                toast.error(prepareMessage(error, 'Произошла ошибка во время попытки входа'));

                throw error;
            }
        },
        [router]
    );
};

export const useRegisterHandler = () => {
    const router = useRouter();

    return useCallback(
        async (fields: RegisterFormField) => {
            try {
                const res = await register(createRegisterUser(fields));
                const { access_token, access_token_expires_in, refresh_token } = res;
                setCookie('sportsmap_token', access_token);
                setCookie('sportsmap_expiresIn', access_token_expires_in, {
                    maxAge: access_token_expires_in,
                });
                setCookie('sportsmap_refreshToken', refresh_token);

                toast.success('Вы успешно зарегистрировались');
                await router.replace(pageRoutes.search);
            } catch (error) {
                toast.error(prepareMessage(error, 'Произошла ошибка во время попытки регистрации'));

                throw error;
            }
        },
        [router]
    );
};

export const useTabs = () => {
    const handleSubmitLogin = useLoginHandler();
    const handleSubmitRegister = useRegisterHandler();

    return useMemo(
        () => [
            {
                label: <h2 className={styles['Login-TabTitle']}>Вход</h2>,
                key: '1',
                children: <LoginForm handleSubmit={handleSubmitLogin} />,
            },
            {
                label: <h2 className={styles['Login-TabTitle']}>Регистрация</h2>,
                key: '2',
                children: <RegisterForm handleSubmit={handleSubmitRegister} />,
            },
        ],
        []
    );
};
