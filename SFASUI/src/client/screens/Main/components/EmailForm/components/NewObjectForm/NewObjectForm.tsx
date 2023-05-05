import { FormikProvider, useFormik } from 'formik';

import { TextInputField } from 'src/client/shared/components/TextInput/formik/TextInputField';
import { MarkdownEditor } from 'src/client/shared/components/Markdown';
import { TextWithIcon } from 'src/client/shared/components/TextWithIcon';
import { Button } from 'src/client/shared/components/Button';

import { newObjectFormFieldsInitialValues, REQUIREMENTS } from './NewObjectForm.constants';
import { NewObjectFormFields } from './NewObjectForm.types';
import { useHandleSubmit } from './NewObjectForm.hooks';
import { useSchema } from './NewObjectForm.schema';

import styles from './NewObjectForm.module.css';

export const NewObjectForm = () => {
    const handleSubmit = useHandleSubmit();

    const formikStateAndHelpers = useFormik<NewObjectFormFields>({
        initialValues: newObjectFormFieldsInitialValues,
        onSubmit: handleSubmit,
        validationSchema: useSchema(),
    });

    return (
        <FormikProvider value={formikStateAndHelpers}>
            <form className={styles['NewObjectForm']} >
                <div className={styles['NewObjectForm-InputColumn']}>
                    <div className={styles['NewObjectForm-Address']}>
                        <TextWithIcon
                            className={styles['NewObjectForm-LabelWrapper']}
                            iconUrl="/icons/address.svg"
                        >
                            <span className={styles['NewObjectForm-Label']}>Адрес спортивного объекта</span>
                        </TextWithIcon>
                        <TextInputField
                            required
                            className={styles['NewObjectForm-AddressInput']}
                            fieldName="address"
                            label="Адрес спортивного объекта"
                            hiddenLabel
                            placeholder="10 линия ВО, 49"
                        />
                        <TextWithIcon
                            className={styles['NewObjectForm-LabelWrapper']}
                            iconUrl="/icons/facility/owner.svg"
                        >
                            <span className={styles['NewObjectForm-Label']}>Владелец объекта</span>
                        </TextWithIcon>
                        <TextInputField
                            required
                            className={styles['NewObjectForm-OwnerInput']}
                            fieldName="owner"
                            label="Владелец объекта"
                            hiddenLabel
                            placeholder="МБОУ СОШ №15"
                        />
                        <TextWithIcon
                            className={styles['NewObjectForm-LabelWrapper']}
                            iconUrl="/icons/note.svg"
                        >
                            <span className={styles['NewObjectForm-Label']}>Примечания</span>
                        </TextWithIcon>
                        <MarkdownEditor
                            className={styles['NewObjectForm-NotesInput']}
                            fieldName="note"
                            label="Примечания"
                            hiddenLabel
                            placeholder="Примечания"
                        />
                    </div>
                </div>
                <div className={styles['NewObjectForm-RequirementsColumn']}>
                    <div className={styles['NewObjectForm-RequirementsWrapper']}>
                        <span className={styles['NewObjectForm-Heading']}>Требования</span>
                    </div>
                    <ul className={styles['NewObjectForm-RequirementsList']}>
                        {REQUIREMENTS.map((item) => (
                            <li className={styles['NewObjectForm-RequirementsListItem']} key={item}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </form>
            <Button text="Отправить" onClick={formikStateAndHelpers.submitForm} />
        </FormikProvider>
    );
};
