import React, { Dispatch, SetStateAction } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

import { Button } from 'src/client/shared/components/Button';

import { SidebarDetails } from '../SidebarDetails';
import { SidebarItemsList } from '../SidebarItemList';
import { SidebarFilters } from '../SidebarFilters';
import { SidebarItemsListSkeleton } from '../SidebarItemsListSkeleton';
import { SidebarMessage } from '../SidebarMessage';

import styles from './Sidebar.module.css';
import Link from 'next/link';
import { pageRoutes } from '../../../../shared/routes';

type SidebarProps = {
    items?: Definitions.FacilityResponse[];
    isLoading?: boolean;
    error?: any;
    count?: number;
    className?: string;
    activeItem: Definitions.FacilityResponse | null;
    setActiveItem: Dispatch<SetStateAction<Definitions.FacilityResponse | null>>;
};

export const Sidebar = ({
    items,
    isLoading = false,
    error,
    count,
    className,
    activeItem,
    setActiveItem,
}: SidebarProps) => {
    const showContent = !error && !isLoading && items && items.length > 0;
    const showNotFound = !error && !isLoading && items && items.length === 0;

    const showList = (!error && isLoading) || (showContent && !activeItem);
    const shouldReduceMotion = useReducedMotion();

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

            <AnimatePresence initial={false} exitBeforeEnter>
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
            </AnimatePresence>
        </aside>
    );
};
