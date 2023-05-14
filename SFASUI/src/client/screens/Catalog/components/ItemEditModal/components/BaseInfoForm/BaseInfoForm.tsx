import { TextInputField } from 'src/client/shared/components/TextInput/formik/TextInputField';
import { SelectField } from 'src/client/shared/components/Select/formik';
import { TagGroupField } from 'src/client/shared/components/TagGroup/formik/TagGroupField';
import { CheckboxField } from 'src/client/shared/components/Checkbox/formik/CheckboxField';
import { DEFAULT_AGES, DEFAULT_PAYING_TYPES } from 'src/client/shared/utils/api/facilities/constants';
import {
    useAgesOptions,
    useFacilityTypeSelectOptions,
    usePayingTypeOptions,
} from 'src/client/shared/utils/facilities/hooks';
import { MapField } from 'src/client/shared/components/MapField';

import styles from './BaseInfoForm.module.css';

export const BaseInfoForm = () => {
    const selectTypeOptions = useFacilityTypeSelectOptions();
    const ageOptions = useAgesOptions();
    const payingTypeOptions = usePayingTypeOptions();

    return (
        <form className={styles['BaseInfo']}>
            <div className={[styles['BaseInfo-Column'], styles['BaseInfo-Column_fields']].join(' ')}>
                <TextInputField
                    inputClassName={styles['BaseInfo-Input']}
                    required
                    className={styles['BaseInfo-Name']}
                    fieldName="name"
                    label="Название"
                    placeholder='Каток "Ледовая арена"'
                />
                <div className={styles['BaseInfo-InputSection']}>
                    <TextInputField
                        required
                        inputClassName={styles['BaseInfo-Input']}
                        className={styles['BaseInfo-Owner']}
                        fieldName="owner"
                        label="Владелец"
                        placeholder="МБОУ СОШ №35"
                    />
                    <SelectField
                        allowClear={false}
                        required
                        placeholder="Не выбрано"
                        className={styles['BaseInfo-Type']}
                        fieldName="type"
                        label="Тип объекта"
                        options={selectTypeOptions}
                    />
                </div>
                <TextInputField
                    inputClassName={styles['BaseInfo-Input']}
                    className={styles['BaseInfo-Phone']}
                    fieldName="phone_number"
                    label="Телефон"
                    placeholder="+7 (9--) 000-00-00"
                />
                <TextInputField
                    inputClassName={styles['BaseInfo-Input']}
                    className={styles['BaseInfo-Site']}
                    fieldName="site"
                    label="Сайт объекта"
                    placeholder="Ссылка"
                />
                <TagGroupField
                    required
                    className={styles['BaseInfo-PayingType']}
                    fieldName="paying_type"
                    label="Тип услуг"
                    tagValues={payingTypeOptions  || DEFAULT_PAYING_TYPES}
                />
                <TagGroupField
                    required
                    className={styles['BaseInfo-Age']}
                    fieldName="age"
                    label="Аудитория объекта"
                    tagValues={ageOptions || DEFAULT_AGES}
                />
                <CheckboxField
                    className={styles['BaseInfo-Availability']}
                    fieldName="accessibility"
                    label="Доступная среда"
                    hint="спортивный объект, оборудованный с учетом потребностей, возникающих у людей с ограниченными возможностями, и позволяющая им вести независимый образ жизни"
                />
            </div>
            <div className={styles['BaseInfo-Column']}>
                <TextInputField
                    inputClassName={styles['BaseInfo-Input']}
                    className={styles['BaseInfo-Address']}
                    fieldName="address"
                    label="Адрес"
                    required
                    placeholder="10 линия ВО, 49"
                />
                <MapField />
            </div>
        </form>
    );
};
