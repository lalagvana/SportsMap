import { useCallback, useState } from 'react';

import { Tabs } from 'src/client/shared/components/Tabs';
import { Carousel } from 'src/client/shared/components/Carousel';

import { useTabs } from './EmailForm.hooks';
import { ProposalForm } from './components/ProposalForm';
import { NewObjectForm } from './components/NewObjectForm';

import styles from './EmailForm.module.css';

export const EmailForm = () => {
    const items = useTabs();

    const [activeTab, setActiveTab] = useState('1');
    const onTabChange = useCallback((value) => setActiveTab(value), [setActiveTab]);

    return (
        <div className={styles['EmailForm']}>
            <div className={styles['EmailForm_desktop']}>
                <Tabs items={items} activeKey={activeTab} onChange={onTabChange} />
            </div>
            <div className={styles['EmailForm_mobile']}>
                <Carousel
                    draggable
                    infinite={false}
                    dotPosition="top"
                    adaptiveHeight
                    centerPadding="100px"
                    dots={{ className: styles['EmailForm-Dots'] }}
                >
                    <ProposalForm />
                    <NewObjectForm />
                </Carousel>
            </div>
        </div>
    );
};
