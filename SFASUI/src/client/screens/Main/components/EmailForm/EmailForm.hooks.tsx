import { useMemo } from 'react';

import { ProposalForm } from './components/ProposalForm';
import { NewObjectForm } from './components/NewObjectForm';

import styles from './EmailForm.module.css';

export const useTabs = () =>
    useMemo(
        () => [
            {
                label: <h3 className={styles['EmailForm-TabTitle']}>Пожелания и замечания</h3>,
                key: '1',
                children: <ProposalForm />,
            },
            {
                label: <h3 className={styles['EmailForm-TabTitle']}>Новый объект</h3>,
                key: '2',
                children: <NewObjectForm />,
            },
        ],
        []
    );
