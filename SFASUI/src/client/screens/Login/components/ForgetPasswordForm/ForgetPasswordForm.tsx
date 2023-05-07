import { FormikProvider, useFormik } from 'formik';
import React from 'react';

import { TextInputField } from 'src/client/shared/components/TextInput/formik/TextInputField';
import { Button } from 'src/client/shared/components/Button';
import { TextWithIcon } from 'src/client/shared/components/TextWithIcon';

import { FORGET_PASSWORD_INITIAL_FIELDS } from './ForgetPasswordForm.constants';
import { useHandleSubmit } from './ForgetPasswordForm.hooks';
import { ForgetPasswordFields } from './ForgetPasswordForm.types';
import { useSchema } from './ForgetPasswordForm.schema';

import styles from './ForgetPasswordForm.module.css';

type ForgetPasswordFormProps = {
    hide: () => void;
};

export const ForgetPasswordForm = ({}: ForgetPasswordFormProps) => {
    const handleSubmit = useHandleSubmit();

    const formikStateAndHelpers = useFormik<ForgetPasswordFields>({
        initialValues: FORGET_PASSWORD_INITIAL_FIELDS,
        onSubmit: handleSubmit,
        validationSchema: useSchema(),
    });

    return (
        <FormikProvider value={formikStateAndHelpers}>
            <div className={styles['ForgetPassword']}>
                <form className={styles['ForgetPassword-Form']}>
                    <TextWithIcon
                        iconType="mail"
                        width={24}
                        height={36}
                        className={styles['ForgetPassword-LabelWrapper']}
                    >
                        <TextInputField
                            type="email"
                            placeholder="Электронная почта"
                            fieldName="email"
                            label="Электронная почта"
                            hiddenLabel
                            className={styles['ForgetPassword-Input']}
                        />
                    </TextWithIcon>
                </form>
                <Button
                    className={styles['ForgetPassword-Button']}
                    onClick={formikStateAndHelpers.submitForm}
                    text="Восстановить пароль"
                />
            </div>
        </FormikProvider>
    );
};
