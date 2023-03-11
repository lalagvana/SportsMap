import { memo } from 'react';

import styles from './Skeleton.module.css';

type SkeletonProps = {
    className?: string;
};

export const Skeleton = memo(({ className }: SkeletonProps) => {
    return (
        <div className={[styles['Skeleton'], className].join(' ')} />
    );
});
