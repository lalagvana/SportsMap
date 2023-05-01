import { Checkbox } from 'src/client/shared/components/Checkbox';

import { FiltersTab } from 'src/client/screens/Catalog/components/Filters/Filters.constants';
import { FiltersState } from 'src/client/screens/Catalog/components/Filters/Filters.types';

import styles from './CheckboxTab.module.css';

type CheckboxTabProps = {
    onCheckboxClick: (property: string, checked: boolean) => void;
    filtersState: FiltersState;
    activeTab: FiltersTab;
    items: string[];
};

export const CheckboxTab = ({ onCheckboxClick, filtersState, activeTab, items }: CheckboxTabProps) => (
    <fieldset className={styles['CheckboxTab']}>
        {items.map((name) => (
            <Checkbox
                className={styles['CheckboxTab-Checkbox']}
                key={name}
                label={name}
                onChange={(checked) => onCheckboxClick(name, checked)}
                checked={Boolean(filtersState[activeTab]?.[name])}
            />
        ))}
    </fieldset>
);
