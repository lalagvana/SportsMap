import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import { Button } from 'src/client/shared/components/Button';

import styles from './Beginning.module.css';

type BeginningProps = {
    className?: string;
};

export const Beginning = ({ className }: BeginningProps) => {
    return (
        <section className={[styles['Beginning'], className].join(' ')}>
            <article className={styles['Beginning-Greeting']}>
                <h1 className={styles['Beginning-Heading']}>Здоровое тело - в здоровом поиске!</h1>
                <p className={styles['Beginning-Caption']}>
                    Интерактивная карта поможет найти для себя и своих близких место для занятий спортом
                </p>
                <Button className={styles['Beginning-Button']}>
                    <Link passHref href="/map">
                        <a>
                            <span className={styles['Beginning-LinkText']}>Перейти на карту</span>
                        </a>
                    </Link>
                </Button>
            </article>

            <div className={styles['Beginning-Girl']}>
                <Image width={481} height={476} src="/images/main/girl.png" layout="fixed" />
            </div>
        </section>
    );
};