import { FormikProvider, useFormik } from 'formik';
import React from 'react';

import { TextInputField } from 'src/client/shared/components/TextInput/formik/TextInputField';
import { Button } from 'src/client/shared/components/Button';
import { TextWithIcon } from 'src/client/shared/components/TextWithIcon';

import { NEW_PASSWORD_INITIAL_FIELDS } from './NewPasswordForm.constants';
import { useHandleSubmit } from './NewPasswordForm.hooks';
import { NewPasswordFields } from './NewPasswordForm.types';
import { useSchema } from './NewPasswordForm.schema';

import styles from './NewPasswordForm.module.css';

export const NewPasswordForm = () => {
    const handleSubmit = useHandleSubmit();

    const formikStateAndHelpers = useFormik<NewPasswordFields>({
        initialValues: NEW_PASSWORD_INITIAL_FIELDS,
        onSubmit: handleSubmit,
        validationSchema: useSchema(),
    });

    return (
        <div className={styles['NewPassword']}>
            <FormikProvider value={formikStateAndHelpers}>
                <form className={styles['NewPassword-Form']}>
                    <TextWithIcon
                        iconType="password"
                        width={24}
                        height={36}
                        className={styles['NewPassword-LabelWrapper']}
                    >
                        <TextInputField
                            type="password"
                            placeholder="Новый пароль"
                            fieldName="password"
                            label="Новый пароль"
                            hiddenLabel
                            className={styles['NewPassword-Input']}
                        />
                    </TextWithIcon>
                    <TextInputField
                        type="password"
                        placeholder="Повторите пароль"
                        fieldName="confirmPassword"
                        label="Повторите пароль"
                        hiddenLabel
                        className={styles['NewPassword-Input_noIcon']}
                    />
                </form>
                <Button
                    className={styles['NewPassword-Button']}
                    onClick={formikStateAndHelpers.submitForm}
                    text="Поменять пароль"
                    isLoading={formikStateAndHelpers.isSubmitting}
                />
            </FormikProvider>
        </div>
    );
};
