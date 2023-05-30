import Link from 'next/link';
import React, { useMemo } from 'react';
import { useRouter } from 'next/router';

import { HEADER_LINKS } from './HeaderLinks.constants';

import styles from './HeaderLinks.module.css';
import { hasCookie } from 'cookies-next';
import { useLogoutHandler } from '../../Header.hooks';
import { pageRoutes } from '../../../../routes';
import { Button, ButtonType } from '../../../Button';
import Exit from '../../../../../../../public/icons/auth/exit.svg';
import User from '../../../../../../../public/icons/user.svg';

type HeaderLinksProps = {
    className?: string;
    hide?: () => {};
};

export const HeaderLinks = ({ className, hide }: HeaderLinksProps) => {
    const { pathname } = useRouter();

    const isLogged = hasCookie('sportsmap_token');

    const logoutHandler = useLogoutHandler();

    return (
        <nav className={[styles['HeaderLinks'], className].join(' ')}>
            {HEADER_LINKS.map(({ label, link }) => (
                <Link passHref href={link} key={label} >
                    <a
                      onClick={hide}
                        className={[
                            styles['HeaderLinks-Link'],
                            pathname === link ? styles['HeaderLinks-Link_active'] : '',
                        ].join(' ')}
                    >
                        {label}
                    </a>
                </Link>
            ))}
            {isLogged ? (
                <Button view={ButtonType.Clear} onClick={logoutHandler}>
                    <span className={[styles['HeaderLinks-Link'], styles['HeaderLinks-Link_login']].join(' ')}>Выйти</span>
                </Button>
            ) : (
                <Link passHref href={pageRoutes.login}>
                    <a
                      onClick={hide}
                        className={[
                            styles['HeaderLinks-Link_login'],
                            styles['HeaderLinks-Link'],
                            pathname === pageRoutes.login ? styles['HeaderLinks-Link_active'] : '',
                        ].join(' ')}
                    >
                        Войти
                    </a>
                </Link>
            )}
        </nav>
    );
};
