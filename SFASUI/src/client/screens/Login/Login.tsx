import React, { useCallback, useState } from 'react';
import Head from 'next/head';

import { Tabs } from 'src/client/shared/components/Tabs';

import { useTabs } from './Login.hooks';

import styles from './Login.module.css';

export const Login = () => {
    const items = useTabs();

    const [activeTab, setActiveTab] = useState('1');
    const onTabChange = useCallback((value) => setActiveTab(value), [setActiveTab]);

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
            </main>
        </>
    );
};
