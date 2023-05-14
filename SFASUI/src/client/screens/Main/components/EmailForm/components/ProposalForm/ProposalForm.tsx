import { FormikProvider, useFormik } from 'formik';

import { TextInputField } from 'src/client/shared/components/TextInput/formik/TextInputField';
import { MarkdownEditor } from 'src/client/shared/components/Markdown';
import { TextWithIcon } from 'src/client/shared/components/TextWithIcon';
import { Button } from 'src/client/shared/components/Button';

import { PROPOSAL_FORM_INITIAL_VALUES } from './ProposalForm.constants';
import { useHandleSubmit } from './ProposalForm.hooks';
import { ProposalFormFields } from './ProposalForm.types';
import { useSchema } from './ProposalForm.schema';

import styles from './ProposalForm.module.css';

export const ProposalForm = () => {
    const handleSubmit = useHandleSubmit();

    const formikStateAndHelpers = useFormik<ProposalFormFields>({
        initialValues: PROPOSAL_FORM_INITIAL_VALUES,
        onSubmit: handleSubmit,
        validationSchema: useSchema(),
    });

    return (
        <FormikProvider value={formikStateAndHelpers}>
            <form className={styles['ProposalForm']} >
                <div className={styles['ProposalForm-Name']}>
                    <TextWithIcon className={styles['ProposalForm-LabelWrapper']} iconType="user">
                        <span className={styles['ProposalForm-Label']}>Как нам к Вам обращаться?</span>
                    </TextWithIcon>
                    <TextInputField
                        required
                        className={styles['ProposalForm-FirstNameInput']}
                        fieldName="surname"
                        label="Фамилия"
                        hiddenLabel
                        placeholder="Фамилия"
                    />
                    <TextInputField
                        required
                        className={styles['ProposalForm-SurNameInput']}
                        fieldName="name"
                        label="Имя"
                        hiddenLabel
                        placeholder="Имя"
                    />
                </div>
                <div className={styles['ProposalForm-Email']}>
                    <TextWithIcon className={styles['ProposalForm-LabelWrapper']} iconType="mail">
                        <span className={styles['ProposalForm-Label']}>Как нам с Вами связаться?</span>
                    </TextWithIcon>
                    <TextInputField
                        required
                        className={styles['ProposalForm-EmailInput']}
                        fieldName="email"
                        label="Электронная почта"
                        hiddenLabel
                        placeholder="Электронная почта"
                    />
                </div>
                <div className={styles['ProposalForm-Notes']}>
                    <TextWithIcon className={styles['ProposalForm-LabelWrapper']} iconType="note">
                        <span className={styles['ProposalForm-Label']}>
                            Что Вам не понравилось или что бы Вы хотели предложить?
                        </span>
                    </TextWithIcon>
                    <MarkdownEditor
                        className={styles['ProposalForm-NotesInput']}
                        fieldName="note"
                        label="Примечания"
                        hiddenLabel
                        placeholder="Примечания"
                    />
                </div>
            </form>
            <Button text="Отправить" onClick={formikStateAndHelpers.submitForm} isLoading={formikStateAndHelpers.isSubmitting}/>
        </FormikProvider>
    );
};
