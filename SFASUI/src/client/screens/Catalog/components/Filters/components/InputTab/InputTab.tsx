import { TextInput } from 'src/client/shared/components/TextInput';

import { FiltersTab } from 'src/client/screens/Catalog/components/Filters/Filters.constants';
import { FiltersState } from 'src/client/screens/Catalog/components/Filters/Filters.types';

import styles from './InputTab.module.css';

type FiltersHeaderProps = {
    items: { label: string; units: string }[];
    activeTab: FiltersTab;
    filtersState: FiltersState;
    onInputChange: (label: string, value: string, type: 'from' | 'to') => void;
};

export const InputTab = ({ items, onInputChange, filtersState, activeTab }: FiltersHeaderProps) => {
    return (
        <fieldset className={styles['InputTab']}>
            {items.map(({ label, units }) => (
                <div className={styles['InputTab-Field']} key={label}>
                    <label className={styles['InputTab-Label']}>{label}</label>
                    <TextInput
                        className={styles['InputTab-TextField']}
                        onChange={(value) => onInputChange(label, value, 'from')}
                        placeholder="От"
                        type="number"
                        value={filtersState[activeTab]?.[label]?.['from']}
                    />
                    <TextInput
                        className={styles['InputTab-TextField']}
                        onChange={(value) => onInputChange(label, value, 'to')}
                        placeholder="До"
                        type="number"
                        value={filtersState[activeTab]?.[label]?.['to']}
                    />
                    <span className={styles['InputTab-Units']}>{units}</span>
                </div>
            ))}
        </fieldset>
    );
};
