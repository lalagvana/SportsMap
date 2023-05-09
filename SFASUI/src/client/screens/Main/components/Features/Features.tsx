import Image from 'next/image';
import React, { memo } from 'react';

import { useItems } from './Features.hooks';
import { useTheme } from "src/client/shared/hooks/use-theme";

import styles from './Features.module.css';

export const Features = memo(() => {
    const items = useItems();
    const { isLight } = useTheme();

    return (
        <section
            className={[styles['Features'], isLight ? styles['Features_light'] : styles['Features_dark']].join(' ')}
        >
            <div className={styles['Features-Content']}>
                {items.map(({ name, heading, text }) => (
                    <section
                        key={name}
                        className={[styles['Features-Image'], styles[`Features-Image_${name}`]].join(' ')}
                    >
                        <Image width={200} height={200} src={`/images/main/${name}.png`} layout="fixed" />
                        <div className={styles['Features-Description']}>
                            <div className={styles['Features-Label']}>
                                <h3 className={styles['Features-Heading']}>{heading}</h3>
                            </div>
                            {text}
                        </div>
                    </section>
                ))}
            </div>
        </section>
    );
});
