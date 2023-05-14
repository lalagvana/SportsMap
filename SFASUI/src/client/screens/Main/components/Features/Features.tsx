import Image from 'next/image';
import React, { memo } from 'react';
import { motion } from 'framer-motion';

import { useTheme } from "src/client/shared/hooks/use-theme";

import { useItems } from './Features.hooks';

import styles from './Features.module.css';

export const Features = memo(() => {
    const items = useItems();
    const { isLight } = useTheme();

    return (
        <motion.section
            className={[styles['Features'], isLight ? styles['Features_light'] : styles['Features_dark']].join(' ')}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <div className={styles['Features-Content']}>
                {items.map(({ name, heading, text }) => (
                    <section
                        key={name}
                        className={[styles['Features-Image'], styles[`Features-Image_${name}`]].join(' ')}
                    >
                        <Image width={200} height={200} src={isLight ? `/images/main/${name}.png` :  `/images/main/${name}_black.png`} layout="fixed" />
                        <div className={styles['Features-Description']}>
                            <div className={styles['Features-Label']}>
                                <h3 className={styles['Features-Heading']}>{heading}</h3>
                            </div>
                            {text}
                        </div>
                    </section>
                ))}
            </div>
        </motion.section>
    );
});
