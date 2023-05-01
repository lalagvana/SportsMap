import { useRouter } from 'next/router';

import { Search } from 'src/client/shared/components/Search';
import { Select } from 'src/client/shared/components/Select';
import { Button, ButtonType } from 'src/client/shared/components/Button';
import { useVisible } from 'src/client/shared/hooks/use-visible';

import { FileLoadModal } from '../FileLoadModal';

import styles from './FiltersControls.module.css';

export const FiltersControls = () => {
    const { query } = useRouter();

    const { isVisible, open, hide } = useVisible({});

    return (
        <div className={styles['FiltersControls']}>
            <fieldset className={styles['FiltersControls-Fieldset']}>
                <Search className={styles['FiltersControls-Search']} initialValue="" onSearch={() => {}} />
                <Select
                    value={query['order_by']}
                    placeholder="Сортировка"
                    options={[{ label: 'По площади', value: 'area' }]}
                />
            </fieldset>
            <div className={styles['FiltersControls-ButtonGroup']}>
                <Button view={ButtonType.Active} text="Скачать отчет" />
                <Button view={ButtonType.Active} text="Создать объект" />
                <Button view={ButtonType.Active} text="Загрузить файл" onClick={open} />
            </div>
            {isVisible && <FileLoadModal hide={hide} />}
        </div>
    );
};
