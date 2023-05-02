import Image from 'next/image';
import { useState } from 'react';
import { mutate } from 'swr';

import { Button, ButtonType } from 'src/client/shared/components/Button';
import { QuerySelect } from 'src/client/shared/components/QuerySelect';
import { QuerySearch } from 'src/client/shared/components/QuerySearch';
import { apiRoutes } from 'src/client/shared/utils/api/apiRoutes';

import { useFilters } from './SidebarFilters.hooks';

import styles from './SidebarFilters.module.css';

export const SidebarFilters = () => {
    const [isOpen, setOpen] = useState(true);
    const filters = useFilters();

    return (
        <fieldset className={styles['SidebarFilters']}>
            <QuerySearch
                className={styles['SidebarFilters-Search']}
                onSuccess={() => mutate(apiRoutes.facilitySearch)}
            />
            <Button
                onClick={() => setOpen(!isOpen)}
                view={isOpen ? ButtonType.Active : ButtonType.Clear}
                className={[
                    styles['SidebarFilters-Toggle'],
                    isOpen ? styles['SidebarFilters-Toggle_open'] : styles['SidebarFilters-Toggle_closed'],
                ].join(' ')}
                icon={
                    <Image
                        width={21}
                        height={21}
                        src={isOpen ? '/icons/filters_active.png' : '/icons/filters_default.png'}
                        layout="fixed"
                    />
                }
            />
            {isOpen &&
                filters.map((selectProps) => (
                    <QuerySelect {...selectProps} onSuccess={() => mutate(apiRoutes.facilitySearch)} />
                ))}
        </fieldset>
    );
};
