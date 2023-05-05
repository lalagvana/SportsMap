import Image from 'next/image';
import React from 'react';

import { ACHIEVEMENT_ITEMS } from './Achievements.constants';

import styles from './Achievements.module.css';

export const Achievements = () => {
    return (
        <section className={styles['Achievements']}>
            <div className={styles['Achievements-Content']}>
                <h2 className={styles['Achievements-BigHeading']}>Чем полезен SportsMap?</h2>
                <div className={styles['Achievements-ImageContainer']}>
                    {ACHIEVEMENT_ITEMS.map(({ name, image, text }) => (
                        <section
                            key={name}
                            className={[styles['Achievements-Image'], styles[`Achievements-Image_${image}`]].join(' ')}
                        >
                            <Image width={133} height={162} src={`/images/main/${image}.png`} layout="fixed" />
                            <div className={styles['Achievements-Label']}>
                                <h3 className={styles['Achievements-Heading']}>{name}</h3>
                            </div>
                            <p className={styles['Achievements-Text']}>{text}</p>
                        </section>
                    ))}
                </div>
            </div>
        </section>
    );
};
