import React from 'react';
import Link from 'next/link';
import { hasCookie } from 'cookies-next';

import { Button, ButtonType } from 'src/client/shared/components/Button';
import { pageRoutes } from 'src/client/shared/routes';

import { ThemeSwitcher } from './components/ThemeSwitcher';
import { Burger } from './components/Burger';
import { HeaderLinks } from './components/HeaderLinks';
import { useLogoutHandler } from "./Header.hooks";

import Exit from 'public/icons/auth/exit.svg';
import User from 'public/icons/user.svg';
import LogoImage from 'public/images/Logo.svg';

import styles from './Header.module.css';

type HeaderProps = {
    roundedHeaderButton?: boolean;
    logoLink?: JSX.Element;
    links?: JSX.Element[];
    className?: string;
    collapseBreakpointClass?: string;
};

export const Header = ({ className }: HeaderProps) => {
    const isLogged = hasCookie('sportsmap_token');

    const logoutHandler = useLogoutHandler();

    return (
        <header className={[styles['Header'], className].join(' ')}>
            <div className={styles['Header-Content']}>
                <Burger className={styles['Header-Burger']} />
                <div className={styles['Header-Logo']}>
                    <Link passHref href={pageRoutes.root}>
                        <a>
                            <LogoImage width={187} height={45} />
                        </a>
                    </Link>
                </div>
                <HeaderLinks className={styles['Header-Links']} />
                <div className={styles['Header-User']}>
                    <ThemeSwitcher />
                    {isLogged ? (
                        <Button
                            icon={<Exit width={40} height={40} />}
                            view={ButtonType.Clear}
                            onClick={logoutHandler}
                            className={styles['Header-UserLogout']}
                        />
                    ) : (
                        <Link passHref href={pageRoutes.login}>
                            <a className={styles['Header-UserLink']}>
                                <User width={40} height={40} />
                            </a>
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};
