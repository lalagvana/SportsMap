import React from 'react';
import Head from 'next/head';

import { useTheme } from 'src/client/shared/hooks/use-theme';

import { NewPasswordForm } from './components/NewPasswordForm';

import styles from './NewPassword.module.css';

export const NewPassword = () => {
    const { theme } = useTheme();

    return (
        <>
            <Head>
                <title>Новый пароль</title>
                <meta name="title" content="Новый пароль" />
            </Head>
            <main className={[styles['NewPassword'], styles[`NewPassword_${theme}`]].join(' ')}>
                <NewPasswordForm />
            </main>
        </>
    );
};
