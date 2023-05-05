import { TextInputField } from 'src/client/shared/components/TextInput/formik/TextInputField';
import { SelectField } from 'src/client/shared/components/Select/formik';
import { useCoveringTypeSelectOptions, useOwningTypeSelectOptions } from 'src/client/shared/utils/facilities/hooks';
import { MarkdownEditor } from 'src/client/shared/components/Markdown';

import { PHYSICAL_TRAITS } from './AdditionalInfoForm.constants';
import { PhotoUploader } from './components/PhotoUploader';

import styles from './AdditionalInfoForm.module.css';

export const AdditionalInfoForm = ({ isNew }: { isNew: boolean }) => {
    const owningTypeSelectOptions = useOwningTypeSelectOptions();
    const coveringTypeSelectOptions = useCoveringTypeSelectOptions();

    return (
        <form className={styles['AdditionalInfo']}>
            <div className={styles['AdditionalInfo-Column']}>
                <h4 className={styles['AdditionalInfo-Header']}>Другое</h4>
                <div className={styles['AdditionalInfo-InputSection']}>
                    <SelectField
                        allowClear={false}
                        placeholder="Не выбрано"
                        className={styles['AdditionalInfo-OwningType']}
                        fieldName="owning_type"
                        label="Форма собственности"
                        options={owningTypeSelectOptions}
                    />
                    <TextInputField
                        inputClassName={styles['AdditionalInfo-CapacityInput']}
                        className={styles['AdditionalInfo-AnnualCapacity']}
                        fieldName="annual_capacity"
                        label="Годовая мощность"
                        placeholder="чел./год"
                        type="number"
                    />
                </div>
                <div className={styles['AdditionalInfo-InputSection']}>
                    <TextInputField
                        inputClassName={styles['AdditionalInfo-NumberInput']}
                        className={styles['AdditionalInfo-EPS']}
                        fieldName="eps"
                        label="ЕПС"
                        placeholder="чел."
                        type="number"
                    />
                    <TextInputField
                        inputClassName={styles['AdditionalInfo-CapacityInput']}
                        className={styles['AdditionalInfo-ActualWorkload']}
                        fieldName="actual_workload"
                        label="Фактическая загруженность"
                        placeholder="чел./час"
                        type="number"
                    />
                </div>
                <MarkdownEditor
                    fieldName="note"
                    label="Примечания"
                    placeholder="Любая дополнительная информация"
                    className={styles['AdditionalInfo-Markdown']}
                />
            </div>
            <div className={styles['AdditionalInfo-Column']}>
                <h4 className={styles['AdditionalInfo-Header']}>Физические характеристики</h4>
                <TextInputField
                    inputClassName={styles['AdditionalInfo-NumberInput']}
                    className={styles['AdditionalInfo-Area']}
                    fieldName="area"
                    label="Площадь"
                    required
                    placeholder="м²"
                    type="number"
                />
                <div className={styles['AdditionalInfo-InputSection']}>
                    {PHYSICAL_TRAITS.map(({ name, fieldName }) => (
                        <TextInputField
                            inputClassName={styles['AdditionalInfo-NumberInput']}
                            className={styles['AdditionalInfo-Physical']}
                            fieldName={fieldName}
                            label={name}
                            placeholder="м"
                            type="number"
                            key={fieldName}
                        />
                    ))}
                </div>
                <SelectField
                    allowClear={false}
                    placeholder="Не выбрано"
                    className={styles['AdditionalInfo-CoveringType']}
                    fieldName="covering_type"
                    label="Тип покрытия"
                    options={coveringTypeSelectOptions}
                />
                {!isNew && <PhotoUploader />}
                {isNew && <p  className={styles['AdditionalInfo-PhotoText']}>Чтобы добавить фотографии к объекту, сначала создайте его</p>}
            </div>
        </form>
    );
};
