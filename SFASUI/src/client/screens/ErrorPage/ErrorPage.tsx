import Image from 'next/image';
import Head from 'next/head';
import React from 'react';
import Link from 'next/link';

import { Button } from 'src/client/shared/components/Button';
import { pageRoutes } from 'src/client/shared/routes';
import { useTheme } from 'src/client/shared/hooks/use-theme';

import styles from './ErrorPage.module.css';

export type ErrorPageProps = {
    code: number;
    heading: string;
    text: string;
    hasCatalogButton?: boolean;
};

export const ErrorPage = ({ code, heading, text, hasCatalogButton }: ErrorPageProps) => {
    const { isLight } = useTheme();

    return (
        <>
            <Head>
                <title>{heading}</title>
                <meta name="title" content={heading} />
            </Head>
            <main className={styles['ErrorPage']}>
                <div className={styles['ErrorPage-Content']}>
                    <section className={styles['ErrorPage-Details']}>
                        <span className={styles['ErrorPage-Code']}>{code}</span>
                        <h1 className={styles['ErrorPage-Heading']}>{heading}</h1>
                        <p className={styles['ErrorPage-Paragraph']}>{text}</p>
                        {hasCatalogButton && (
                            <Button className={styles['ErrorPage-CatalogButton']}>
                                <Link passHref href={pageRoutes.map}>
                                    <a>
                                        <span className={styles['ErrorPage-CatalogLinkText']}>Перейти на карту</span>
                                    </a>
                                </Link>
                            </Button>
                        )}
                    </section>
                    <div className={styles['ErrorPage-Image']}>
                        <Image
                            width={695}
                            height={700}
                            layout="fixed"
                            src={isLight ? '/images/Error.png' : '/images/Error_dark.png'}
                        />
                    </div>
                </div>
            </main>
        </>
    );
};
