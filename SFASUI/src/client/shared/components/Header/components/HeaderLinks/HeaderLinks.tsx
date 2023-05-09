import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

import { HEADER_LINKS } from "./HeaderLinks.constants";

import styles from './HeaderLinks.module.css';

type HeaderLinksProps = {
    className?: string;
};

export const HeaderLinks = ({ className }: HeaderLinksProps) => {
    const { pathname } = useRouter();

    return (
        <nav className={[styles['HeaderLinks'], className].join(' ')}>
            {HEADER_LINKS.map(({ label, link }) => (
                <Link passHref href={link} key={label}>
                    <a
                        className={[
                            styles['HeaderLinks-Link'],
                            pathname === link ? styles['HeaderLinks-Link_active'] : '',
                        ].join(' ')}
                    >
                        {label}
                    </a>
                </Link>
            ))}
        </nav>
    );
};
