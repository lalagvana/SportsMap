import { mutate } from 'swr';

import { QueryCheckbox } from 'src/client/shared/components/QueryCheckbox';
import { apiRoutes } from 'src/client/shared/utils/api/apiRoutes';

import styles from './CheckboxTab.module.css';

type CheckboxTabProps = {
    items: string[];
    name: string;
};

export const CheckboxTab = ({ name: tabName, items }: CheckboxTabProps) => (
    <fieldset className={styles['CheckboxTab']}>
        {items.map((name) => (
            <QueryCheckbox
                name={tabName}
                checkboxName={name}
                className={styles['CheckboxTab-Checkbox']}
                key={name}
                label={name}
                onSuccess={() => mutate(apiRoutes.facilitySearch)}
            />
        ))}
    </fieldset>
);
