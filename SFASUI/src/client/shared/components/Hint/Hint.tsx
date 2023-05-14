import React from 'react';

import { Tooltip } from 'src/client/shared/components/Tooltip';

import HintIcon from 'public/icons/hint.svg';

import styles from './Hint.module.css';

type HintProps = {
    text: string;
};

export const Hint = ({ text }: HintProps) => {
    return (
        <Tooltip title={text}>
            <span className={styles['Hint']}>
                <HintIcon width={16} height={16} />
            </span>
        </Tooltip>
    );
};
