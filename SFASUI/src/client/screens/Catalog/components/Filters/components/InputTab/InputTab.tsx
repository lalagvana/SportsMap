import { mutate } from "swr";

import { QueryTextInput } from 'src/client/shared/components/QueryTextInput';
import { apiRoutes } from "src/client/shared/utils/api/apiRoutes";

import styles from './InputTab.module.css';

type FiltersHeaderProps = {
    items: { label: string; units: string; name: string }[];
};

export const InputTab = ({ items }: FiltersHeaderProps) => {
    return (
        <fieldset className={styles['InputTab']}>
            {items.map(({ label, units, name }) => (
                <div className={styles['InputTab-Field']} key={label}>
                    <label className={styles['InputTab-Label']}>{label}</label>
                    <QueryTextInput
                        className={styles['InputTab-TextField']}
                        placeholder="От"
                        type="number"
                        name={`${name}-from`}
                        onSuccess={() => mutate(apiRoutes.facilitySearch)}
                    />
                    <QueryTextInput
                        className={styles['InputTab-TextField']}
                        placeholder="До"
                        type="number"
                        name={`${name}-to`}
                        onSuccess={() => mutate(apiRoutes.facilitySearch)}
                    />
                    <span className={styles['InputTab-Units']}>{units}</span>
                </div>
            ))}
        </fieldset>
    );
};
