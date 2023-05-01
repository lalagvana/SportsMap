import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';

import { Search } from 'src/client/shared/components/Search';
import { Button, ButtonType } from 'src/client/shared/components/Button';
import { Select } from 'src/client/shared/components/Select';

import { useFilters, useOnChangeHandlers } from './SidebarFilters.hooks';

import styles from './SidebarFilters.module.css';

export const SidebarFilters = () => {
    const [isOpen, setOpen] = useState(true);
    const filters = useFilters();

    const { query } = useRouter();
    const { onSearchChange, onSelectChange } = useOnChangeHandlers();

    return (
        <fieldset className={styles['SidebarFilters']}>
            <Search
                className={styles['SidebarFilters-Search']}
                initialValue={String(query.q || '')}
                onSearch={onSearchChange}
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
                    <Select
                        value={query[selectProps.name]}
                        onChange={(value) => onSelectChange(value, selectProps.name)}
                        {...selectProps}
                    />
                ))}
        </fieldset>
    );
};
