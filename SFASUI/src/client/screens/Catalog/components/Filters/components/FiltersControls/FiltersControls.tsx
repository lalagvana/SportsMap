import { mutate } from 'swr';
import { getCookie } from 'cookies-next';

import { Button, ButtonType } from 'src/client/shared/components/Button';
import { useVisible } from 'src/client/shared/hooks/use-visible';
import { QuerySelect } from 'src/client/shared/components/QuerySelect';
import { QuerySearch } from 'src/client/shared/components/QuerySearch';
import { apiRoutes } from 'src/client/shared/utils/api/apiRoutes';

import { FileLoadModal } from '../FileLoadModal';
import { ItemAddModal } from 'src/client/screens/Catalog/components/ItemEditModal/components/ItemAddModal';
import { sortingSelectOptions } from './FiltersControls.constants';
import { useExportHandler } from './FiltersControls.hooks';

import ExcelImportIcon from 'public/icons/importExcel.svg';
import ExcelExportIcon from 'public/icons/exportExcel.svg';
import AddObjectIcon from 'public/icons/addObject.svg';

import styles from './FiltersControls.module.css';

export const FiltersControls = () => {
    const { isVisible: isFileModalVisible, open: openFileModal, hide: hideFileModal } = useVisible({});
    const { isVisible: isAddItemModalVisible, open: openAddItemModal, hide: hideAddItemModal } = useVisible({});

    const isLogged = getCookie('sportsmap_is_admin');

    const onExport = useExportHandler();

    return (
        <div className={styles['FiltersControls']}>
            <fieldset className={styles['FiltersControls-Fieldset']}>
                <QuerySearch
                    className={styles['FiltersControls-Search']}
                    onSuccess={() => mutate(`catalog${apiRoutes.facilitySearch}`)}
                />
                <QuerySelect
                  className={styles['FiltersControls-Select']}
                    name="order_by"
                    placeholder="Сортировка"
                    options={sortingSelectOptions}
                    onSuccess={() => mutate(`catalog${apiRoutes.facilitySearch}`)}
                />
            </fieldset>
            {isLogged && (
                <div className={styles['FiltersControls-ButtonGroup']}>
                    <Button
                        className={styles['FiltersControls-ButtonExport']}
                        view={ButtonType.Active}
                        text="Скачать отчет"
                        icon={<ExcelExportIcon width={18} height={18} />}
                        onClick={onExport}
                    />
                    <Button
                        className={styles['FiltersControls-ButtonAdd']}
                        view={ButtonType.Active}
                        text="Добавить объект"
                        onClick={openAddItemModal}
                        icon={<AddObjectIcon width={18} height={18} />}
                    />
                    <Button
                        className={styles['FiltersControls-ButtonImport']}
                        view={ButtonType.Active}
                        text="Загрузить файл"
                        onClick={openFileModal}
                        icon={<ExcelImportIcon width={18} height={18} />}
                    />
                </div>
            )}
            {isFileModalVisible && <FileLoadModal hide={hideFileModal} />}
            {isAddItemModalVisible && <ItemAddModal hide={hideAddItemModal} />}
        </div>
    );
};
