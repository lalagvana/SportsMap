import styles from './FiltersControls.module.css';
import { Search } from '../../../../../../shared/components/Search';
import { Select } from '../../../../../../shared/components/Select';
import { useRouter } from 'next/router';
import { Button, ButtonType } from 'src/client/shared/components/Button';
import { useVisible } from '../../../../../../shared/hooks/use-visible';
import { FileLoadModal } from "../FileLoadModal";

export const FiltersControls = () => {
    const { query } = useRouter();

    const { isVisible, open, hide } = useVisible({});

    return (
        <div className={styles['FiltersControls']}>
            <fieldset className={styles['FiltersControls-Fieldset']}>
                <Search className={styles['FiltersControls-Search']} initialValue="" />
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
          {isVisible && <FileLoadModal hide={hide}/>}
        </div>
    );
};
