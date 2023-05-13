import Image from 'next/image';
import { useCallback, useState } from 'react';
import { FormikHelpers, FormikProvider, useFormik } from 'formik';

import { Modal } from 'src/client/shared/components/Modal';
import { Tabs } from 'src/client/shared/components/Tabs';
import { Button } from 'src/client/shared/components/Button';
import { FacilityType } from 'src/client/shared/types/facilities';

import { useOnNextTab, useTabs } from './ItemEditModal.hooks';

import styles from './ItemEditModal.module.css';
import { useSchema } from './ItemEditModal.schema';

type ItemEditModalProps = {
    handleSubmit: (fields: FacilityType, formikHelpers: FormikHelpers<FacilityType>) => Promise<void>;
    initialValues: FacilityType;
    hide: () => void;
    isNew: boolean;
    className?: string;
};

export const ItemEditModal = ({ handleSubmit, initialValues, hide, isNew, className }: ItemEditModalProps) => {
    const items = useTabs(isNew);

    const formikStateAndHelpers = useFormik<FacilityType>({
        initialValues: initialValues,
        onSubmit: handleSubmit,
        validationSchema: useSchema(),
    });

    const [activeTab, setActiveTab] = useState('1');
    const onTabChange = useCallback((value) => setActiveTab(value), [setActiveTab]);

    const { buttonText, clickHandler } = useOnNextTab({
        activeTab,
        setActiveTab,
        submitForm: formikStateAndHelpers.submitForm,
        validateForm: formikStateAndHelpers.validateForm,
    });

    return (
        <FormikProvider value={formikStateAndHelpers}>
            <Modal
                className={className}
                open
                title={
                    <h2 className={styles['ItemEditModal-Title']}>
                        {isNew ? 'Создание спортивного объекта' : 'Редактирование спортивного объекта'}
                    </h2>
                }
                footer={<Button onClick={clickHandler} text={buttonText} />}
                width={1110}
                destroyOnClose
                afterClose={hide}
                onCancel={hide}
            >
                <Tabs items={items} activeKey={activeTab} onChange={onTabChange} />
            </Modal>
        </FormikProvider>
    );
};
