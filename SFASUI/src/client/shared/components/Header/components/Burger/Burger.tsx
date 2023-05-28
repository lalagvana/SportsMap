import React from 'react';

import { Button, ButtonType } from 'src/client/shared/components/Button';
import { useVisible } from 'src/client/shared/hooks/use-visible';
import { Drawer } from 'src/client/shared/components/Drawer';

import { HeaderLinks } from "../HeaderLinks";

import BurgerIcon from 'public/icons/Burger.svg';

import styles from './Burger.module.css'

type BurgerProps = {
    className?: string;
};

export const Burger = ({ className }: BurgerProps) => {
    const { isVisible, hide, open } = useVisible({});

    return (
        <>
            <Button
                className={className}
                icon={<BurgerIcon width={30} height={30} />}
                view={ButtonType.Clear}
                onClick={open}
            />
            <Drawer open={isVisible} onClose={hide} placement="top" height={300} closable={false}>
                <HeaderLinks className={styles['Burger-Links']} hide={hide}/>
            </Drawer>
        </>
    );
};
