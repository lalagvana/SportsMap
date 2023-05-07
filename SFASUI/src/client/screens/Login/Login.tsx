import React, { useCallback, useState } from 'react';
import Head from 'next/head';

import { Tabs } from 'src/client/shared/components/Tabs';
import { useVisible } from 'src/client/shared/hooks/use-visible';

import { useTabs } from './Login.hooks';
import { ForgetPasswordForm } from "./components/ForgetPasswordForm";

import styles from './Login.module.css';

export const Login = () => {
    const [activeTab, setActiveTab] = useState('1');
    const onTabChange = useCallback((value) => setActiveTab(value), [setActiveTab]);

    const { isVisible, hide, open } = useVisible({});
    const items = useTabs({ showForgetPassword: open });

    return (
        <>
            <Head>
                <title>Вход</title>
                <meta name="title" content="Вход" />
            </Head>
            <main className={styles['Login']}>
                <div className={styles['Login-Form']}>
                    <Tabs items={items} activeKey={activeTab} onChange={onTabChange} />
                </div>
                {isVisible && activeTab === '1' && <ForgetPasswordForm hide={hide}/>}
            </main>
        </>
    );
};
