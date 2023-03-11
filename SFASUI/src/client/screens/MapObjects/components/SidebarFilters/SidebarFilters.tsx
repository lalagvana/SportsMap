import Image from 'next/image';
import { useState } from 'react';

import { Search } from 'src/client/shared/components/Search';
import { Button, ButtonType } from 'src/client/shared/components/Button';

import styles from './SidebarFilters.module.css';

export const SidebarFilters = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <fieldset className={styles['SidebarFilters']}>
            <Search className={styles['SidebarFilters-Search']} />
            <Button
                onClick={() => setOpen(!isOpen)}
                type={isOpen ? ButtonType.Active : ButtonType.Clear}
                className={styles['SidebarFilters-Toggle']}
                icon={
                    <Image
                        width={21}
                        height={21}
                        src={isOpen ? '/icons/filters_active.png' : '/icons/filters_default.png'}
                        layout="fixed"
                    />
                }
            />
        </fieldset>
    );
};
