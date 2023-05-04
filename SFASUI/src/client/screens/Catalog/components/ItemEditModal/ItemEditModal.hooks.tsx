import { useCallback, useMemo } from 'react';
import { FormikHelpers } from 'formik';

import { FacilityType } from 'src/client/shared/types/facilities';

import { BaseInfoForm } from './components/BaseInfoForm';
import { WorkingHoursForm } from './components/WorkingHoursForm';
import { AdditionalInfoForm } from './components/AdditionalInfoForm';

import styles from './ItemEditModal.module.css';

export const useTabs = (isNew: boolean) =>
    useMemo(
        () => [
            {
                label: <h3 className={styles['ItemEditModal-TabTitle']}>Основная информация</h3>,
                key: '1',
                children: <BaseInfoForm />,
            },
            {
                label: <h3 className={styles['ItemEditModal-TabTitle']}>Часы работы</h3>,
                key: '2',
                children: <WorkingHoursForm />,
            },
            {
                label: <h3 className={styles['ItemEditModal-TabTitle']}>Дополнительная информация</h3>,
                key: '3',
                children: <AdditionalInfoForm isNew={isNew} />,
            },
        ],
        [isNew]
    );

type UseOnNextTabProps = {
    activeTab: string;
    setActiveTab: (tab: string) => void;
    submitForm: () => Promise<any>;
    validateForm: FormikHelpers<FacilityType>['validateForm'];
};

export const useOnNextTab = ({ activeTab, setActiveTab, submitForm, validateForm }: UseOnNextTabProps) => {
    const clickHandler = useCallback(async () => {
        if (activeTab === '3') {
            await submitForm();
        } else {
            await validateForm();
            setActiveTab(String(Number(activeTab) + 1));
        }
    }, [activeTab, setActiveTab, submitForm, validateForm]);
    const buttonText = useMemo(() => (activeTab === '3' ? 'Сохранить' : 'Далее'), [activeTab]);

    return { clickHandler, buttonText };
};
