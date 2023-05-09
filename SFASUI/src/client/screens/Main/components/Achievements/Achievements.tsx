import Image from 'next/image';
import React from 'react';

import { useTheme } from "src/client/shared/hooks/use-theme";

import { ACHIEVEMENT_ITEMS } from './Achievements.constants';

import styles from './Achievements.module.css';

export const Achievements = () => {
  const { isLight } = useTheme();

    return (
        <section className={[styles['Achievements'], isLight ? styles['Achievements_light'] : styles['Achievements_dark']].join(' ')}>
            <div className={styles['Achievements-Content']}>
                <h2 className={styles['Achievements-BigHeading']}>Чем полезен SportsMap?</h2>
                <div className={styles['Achievements-ImageContainer']}>
                    {ACHIEVEMENT_ITEMS.map(({ name, image, text }) => (
                        <section
                            key={name}
                            className={[styles['Achievements-Image'], styles[`Achievements-Image_${image}`]].join(' ')}
                        >
                          <div className={styles['Achievements-ImageMedal']}>
                            <Image width={133} height={162} src={`/images/main/${image}.png`} layout="fixed" />

                          </div>
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
