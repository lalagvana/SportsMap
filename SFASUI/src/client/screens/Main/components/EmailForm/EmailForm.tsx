import { useCallback, useState } from 'react';

import { Tabs } from 'src/client/shared/components/Tabs';

import { useTabs } from './EmailForm.hooks';

import styles from './EmailForm.module.css';

export const EmailForm = () => {
    const items = useTabs();

    const [activeTab, setActiveTab] = useState('1');
    const onTabChange = useCallback((value) => setActiveTab(value), [setActiveTab]);

    return (
        <div className={styles['EmailForm']}>
            <Tabs items={items} activeKey={activeTab} onChange={onTabChange} />
        </div>
    );
};
