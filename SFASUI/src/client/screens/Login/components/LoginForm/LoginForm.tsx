import { FormikProvider, useFormik } from 'formik';
import React from 'react';

import { TextInputField } from 'src/client/shared/components/TextInput/formik/TextInputField';
import { Button, ButtonType } from 'src/client/shared/components/Button';
import { TextWithIcon } from 'src/client/shared/components/TextWithIcon';

import { LOGIN_INITIAL_VALUES } from './LoginForm.constants';
import { LoginFields } from './LoginForm.types';
import { useSchema } from './LoginForm.schema';

import styles from './LoginForm.module.css';

type LoginFormProps = {
    handleSubmit: (fields: LoginFields) => Promise<void>;
    showForgetPassword: () => void;
};

export const LoginForm = ({ handleSubmit, showForgetPassword }: LoginFormProps) => {
    const formikStateAndHelpers = useFormik<LoginFields>({
        initialValues: LOGIN_INITIAL_VALUES,
        onSubmit: handleSubmit,
        validationSchema: useSchema(),
    });

    return (
        <FormikProvider value={formikStateAndHelpers}>
            <form>
                <TextWithIcon iconType="mail" width={24} height={36} className={styles['Login-LabelWrapper']}>
                    <TextInputField
                        type="email"
                        placeholder="Электронная почта"
                        fieldName="email"
                        label="Электронная почта"
                        hiddenLabel
                        className={styles['Login-Input']}
                    />
                </TextWithIcon>
                <TextWithIcon iconType="password" width={24} height={36} className={styles['Login-LabelWrapper']}>
                    <TextInputField
                        type="password"
                        placeholder="Пароль"
                        fieldName="password"
                        label="Пароль"
                        hiddenLabel
                        className={styles['Login-Input']}
                    />
                </TextWithIcon>
            </form>
            <Button
                className={styles['Login-Button']}
                onClick={formikStateAndHelpers.submitForm}
                text="Войти"
                isLoading={formikStateAndHelpers.isSubmitting}
            />
            <Button
                className={styles['Login-ForgetPassword']}
                view={ButtonType.Clear}
                text="Забыли пароль?"
                onClick={showForgetPassword}
            />
        </FormikProvider>
    );
};
