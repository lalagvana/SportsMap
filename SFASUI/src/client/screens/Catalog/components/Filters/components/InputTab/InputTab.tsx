import { TextInput } from 'src/client/shared/components/TextInput';

import { FiltersState, FiltersTab } from 'src/client/screens/Catalog/components/Filters';

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
                        onChange={(event) => onInputChange(label, event.target.value, 'from')}
                        placeholder="От"
                        type="number"
                        value={filtersState[activeTab]?.[label]?.['from']}
                    />
                    <TextInput
                        className={styles['InputTab-TextField']}
                        onChange={(event) => onInputChange(label, event.target.value, 'to')}
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
