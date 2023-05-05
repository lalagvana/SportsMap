import Image from 'next/image';
import React, { memo } from 'react';

import { useItems } from './Features.hooks';

import styles from './Features.module.css';

export const Features = memo(() => {
    const items = useItems();

    return (
        <section className={styles['Features']}>
            {items.map(({ name, heading, text }) => (
                <section key={name} className={[styles['Features-Image'], styles[`Features-Image_${name}`]].join(' ')}>
                    <Image width={200} height={200} src={`/images/main/${name}.png`} layout="fixed" />
                    <div className={styles['Features-Description']}>
                        <div className={styles['Features-Label']}>
                            <h3 className={styles['Features-Heading']}>{heading}</h3>
                        </div>
                        {text}
                    </div>
                </section>
            ))}
            <div className={styles['Features-Question']}>
                <Image width={173} height={171} src="/images/main/question.png" layout="fixed" />
            </div>
        </section>
    );
});
