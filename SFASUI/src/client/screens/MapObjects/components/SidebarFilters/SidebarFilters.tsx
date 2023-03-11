import Image from 'next/image';
import { useMemo, useState } from 'react';

import { Search } from 'src/client/shared/components/Search';
import { Button, ButtonType } from 'src/client/shared/components/Button';

import styles from './SidebarFilters.module.css';
import { Select } from '../../../../shared/components/Select';

export const SidebarFilters = () => {
    const [isOpen, setOpen] = useState(false);

    const filters = useMemo(
        () => [
            {
                placeholder: 'Тип объекта',
                options: [
                    { value: 'grass', label: 'Трава' },
                    { value: 'concrete', label: 'Бетон' },
                    { value: 'artificial grass', label: 'Искусственная трава' },
                    { value: 'disabled', label: 'Недоступный тип покрытия', disabled: true },
                ],
            },
          {
            placeholder: 'Платные услуги',
            options: [
              { value: 'grass', label: 'Трава' },
              { value: 'concrete', label: 'Бетон' },
              { value: 'artificial grass', label: 'Искусственная трава' },
              { value: 'disabled', label: 'Недоступный тип покрытия', disabled: true },
            ],
          },
          {
            placeholder: 'Аудитория',
            options: [
              { value: 'grass', label: 'Трава' },
              { value: 'concrete', label: 'Бетон' },
              { value: 'artificial grass', label: 'Искусственная трава' },
              { value: 'disabled', label: 'Недоступный тип покрытия', disabled: true },
            ],
          },
        ],
        []
    );

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
          {isOpen && filters.map((selectProps) => <Select {...selectProps}/>)}
        </fieldset>
    );
};
