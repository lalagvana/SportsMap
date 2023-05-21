import React, { useCallback, useState } from 'react';
import Head from 'next/head';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

import { Tabs } from 'src/client/shared/components/Tabs';
import { useVisible } from 'src/client/shared/hooks/use-visible';
import { useTheme } from 'src/client/shared/hooks/use-theme';
import { Carousel } from 'src/client/shared/components/Carousel';

import { useLoginHandler, useRegisterHandler, useTabs } from './Login.hooks';
import { ForgetPasswordForm } from './components/ForgetPasswordForm';
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';

import styles from './Login.module.css';

export const Login = () => {
    const [activeTab, setActiveTab] = useState('1');
    const onTabChange = useCallback((value) => setActiveTab(value), [setActiveTab]);

    const { isVisible, hide, open } = useVisible({});

    const handleSubmitLogin = useLoginHandler();
    const handleSubmitRegister = useRegisterHandler();

    const items = useTabs({ showForgetPassword: open, handleSubmitLogin, handleSubmitRegister });

    const shouldReduceMotion = useReducedMotion();

    const { theme } = useTheme();

    return (
        <>
            <Head>
                <title>Вход</title>
                <meta name="title" content="Вход" />
            </Head>
            <main className={[styles['Login'], styles[`Login_${theme}`]].join(' ')}>
                <div className={[styles['Login-Form'], styles[`Login-Form_mobile`]].join(' ')}>
                    <Carousel
                        draggable
                        infinite={false}
                        dotPosition="top"
                        adaptiveHeight
                        centerPadding="100px"
                        dots={{ className: styles['Login-Dots'] }}
                    >
                        <LoginForm handleSubmit={handleSubmitLogin} showForgetPassword={open} />
                        <RegisterForm handleSubmit={handleSubmitRegister} />
                    </Carousel>
                </div>
                <motion.div
                    layout={shouldReduceMotion ? false : 'position'}
                    className={[styles['Login-Form'], styles[`Login-Form_desktop`]].join(' ')}
                >
                    <Tabs items={items} activeKey={activeTab} onChange={onTabChange} />
                </motion.div>

                <AnimatePresence>
                    {isVisible && activeTab === '1' && <ForgetPasswordForm hide={hide} />}
                </AnimatePresence>
            </main>
        </>
    );
};
