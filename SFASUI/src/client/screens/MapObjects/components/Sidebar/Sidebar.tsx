import React, { Dispatch, SetStateAction, useMemo } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';

import { Button } from 'src/client/shared/components/Button';
import { pageRoutes } from 'src/client/shared/routes';
import { Drawer } from 'src/client/shared/components/Drawer';

import { SidebarDetails } from '../SidebarDetails';
import { SidebarItemsList } from '../SidebarItemList';
import { SidebarFilters } from '../SidebarFilters';
import { SidebarItemsListSkeleton } from '../SidebarItemsListSkeleton';
import { SidebarMessage } from '../SidebarMessage';

import styles from './Sidebar.module.css';

type SidebarProps = {
    items?: Definitions.FacilityResponse[];
    isLoading?: boolean;
    error?: any;
    count?: number;
    className?: string;
    activeItem: Definitions.FacilityResponse | null;
    setActiveItem: Dispatch<SetStateAction<Definitions.FacilityResponse | null>>;
    isDrawerOpen: boolean;
    setIsDrawerOpen: Dispatch<boolean>;
};

export const Sidebar = ({
    items,
    isLoading = false,
    error,
    count,
    className,
    activeItem,
    setActiveItem,
    isDrawerOpen,
    setIsDrawerOpen,
}: SidebarProps) => {
    const showContent = !error && !isLoading && items && items.length > 0;
    const showNotFound = !error && !isLoading && items && items.length === 0;

    const showList = (!error && isLoading) || (showContent && !activeItem);
    const shouldReduceMotion = useReducedMotion();

    const sidebarComponent = useMemo(() => {
        return (
            <div>
                {showList && (
                    <motion.div
                        key="list"
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={
                            shouldReduceMotion
                                ? undefined
                                : {
                                      x: { type: 'spring', stiffness: 300, damping: 30 },
                                  }
                        }
                    >
                        {!error && isLoading && <SidebarItemsListSkeleton />}

                        {showContent && !activeItem && (
                            <SidebarItemsList setActiveItem={setActiveItem} items={items} count={count || 0} />
                        )}
                    </motion.div>
                )}

                {!showList && activeItem && (
                    <SidebarDetails item={activeItem} onBackClick={() => setActiveItem(null)} />
                )}
            </div>
        );
    }, [showList, activeItem, showContent, items, count, isLoading]);

    return (
        <aside className={[styles['Sidebar'], className].join(' ')}>
            <SidebarFilters />
            {error && (
                <SidebarMessage
                    titleClassName={styles['Sidebar-ErrorText']}
                    title="Произошла ошибка во время поиска объектов"
                    message="Попробуйте обновить страницу"
                />
            )}
            {showNotFound && (
                <SidebarMessage
                    titleClassName={styles['Sidebar-NotFoundText']}
                    title="Мы не нашли подходящих спортивных объектов"
                    message="Но вы можете их предложить"
                    button={
                        <Button className={styles['Sidebar-NotFoundButton']}>
                            <Link passHref href={pageRoutes.root}>
                                <a>
                                    <span className={styles['Sidebar-NotFoundButtonText']}>Предложить объект</span>
                                </a>
                            </Link>
                        </Button>
                    }
                />
            )}
            <Drawer
                open={isDrawerOpen}
                rootClassName={styles['Sidebar-Drawer']}
                className={styles['Sidebar-DrawerContent']}
                placement="bottom"
                onClose={() => setIsDrawerOpen(false)}
                closable={false}
                height="90%"
            >
                {sidebarComponent}
            </Drawer>
            <div className={styles['Sidebar_desktop']}>
                <AnimatePresence initial={false} exitBeforeEnter>
                    {sidebarComponent}
                </AnimatePresence>
            </div>
        </aside>
    );
};
