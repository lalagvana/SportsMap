import { random } from 'lodash';

import styles from './Loading.module.css';

export const Loading = () => {
    const randomNumber = random(1, 4);

    return (
        <div className={styles['Loading']}>
            <div className={styles['Loading-Wrap']}>
                <div className={styles['Loading-Shadow']}></div>
                <div className={[styles['Loading-Ball'], styles[`Loading-Ball_${randomNumber}`]].join(' ')}></div>
            </div>
        </div>
    );
};
