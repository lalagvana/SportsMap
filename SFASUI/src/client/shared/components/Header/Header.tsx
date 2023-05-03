import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { HEADER_LINKS } from "./Header.constants";

import styles from './Header.module.css';

type HeaderProps = {
    roundedHeaderButton?: boolean;
    logoLink?: JSX.Element;
    links?: JSX.Element[];
    className?: string;
    collapseBreakpointClass?: string;
};

export const Header = ({ className }: HeaderProps) => {
    const { pathname } = useRouter();

    return (
        <header className={[styles['Header'], className].join(' ')}>
            <div className={styles['Header-Content']}>
                <div className={styles['Header-Logo']}>
                    <Image src="/images/Logo.svg" width={187} height={45} layout="fixed" />
                </div>
                <nav className={styles['Header-Links']}>
                    {HEADER_LINKS.map(({ label, link }) => (
                        <Link passHref href={link} key={label}>
                            <a
                                className={[
                                    styles['Header-Link'],
                                    pathname === link ? styles['Header-Link_active'] : '',
                                ].join(' ')}
                            >
                                {label}
                            </a>
                        </Link>
                    ))}
                </nav>
                <div className={styles['Header-User']}>
                    <Link passHref href="/login">
                        <a className={styles['Header-UserLink']}>
                            <Image src="/icons/user.svg" width={40} height={40} layout="fixed" />
                        </a>
                    </Link>
                </div>
            </div>
        </header>
    );
};
