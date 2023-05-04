import { mutate } from 'swr';

import { Button, ButtonType } from 'src/client/shared/components/Button';
import { useVisible } from 'src/client/shared/hooks/use-visible';
import { QuerySelect } from 'src/client/shared/components/QuerySelect';
import { QuerySearch } from 'src/client/shared/components/QuerySearch';
import { apiRoutes } from 'src/client/shared/utils/api/apiRoutes';

import { FileLoadModal } from '../FileLoadModal';
import { ItemAddModal } from 'src/client/screens/Catalog/components/ItemEditModal/components/ItemAddModal';
import { sortingSelectOptions } from './FiltersControls.constants';

import styles from './FiltersControls.module.css';
import { hasCookie } from 'cookies-next';

export const FiltersControls = () => {
    const { isVisible: isFileModalVisible, open: openFileModal, hide: hideFileModal } = useVisible({});
    const { isVisible: isAddItemModalVisible, open: openAddItemModal, hide: hideAddItemModal } = useVisible({});

    const isLogged = hasCookie('sportsmap_token');

    return (
        <div className={styles['FiltersControls']}>
            <fieldset className={styles['FiltersControls-Fieldset']}>
                <QuerySearch
                    className={styles['FiltersControls-Search']}
                    onSuccess={() => mutate(apiRoutes.facilitySearch)}
                />
                <QuerySelect
                    name="order_by"
                    placeholder="Сортировка"
                    options={sortingSelectOptions}
                    onSuccess={() => mutate(apiRoutes.facilitySearch)}
                />
            </fieldset>
            {isLogged && (
                <div className={styles['FiltersControls-ButtonGroup']}>
                    <Button view={ButtonType.Active} text="Скачать отчет" />
                    <Button view={ButtonType.Active} text="Создать объект" onClick={openAddItemModal} />
                    <Button view={ButtonType.Active} text="Загрузить файл" onClick={openFileModal} />
                </div>
            )}
            {isFileModalVisible && <FileLoadModal hide={hideFileModal} />}
            {isAddItemModalVisible && <ItemAddModal hide={hideAddItemModal} />}
        </div>
    );
};
