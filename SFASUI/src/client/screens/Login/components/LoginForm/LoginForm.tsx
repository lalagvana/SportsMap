import { FormikProvider, useFormik } from 'formik';
import React from 'react';

import { TextInputField } from 'src/client/shared/components/TextInput/formik/TextInputField';
import { Button } from 'src/client/shared/components/Button';
import { TextWithIcon } from 'src/client/shared/components/TextWithIcon';

import { LOGIN_INITIAL_VALUES } from './LoginForm.constants';
import { LoginFields } from './LoginForm.types';

import styles from './LoginForm.module.css';

type LoginFormProps = {
    handleSubmit: (fields: LoginFields) => Promise<void>;
};

export const LoginForm = ({ handleSubmit }: LoginFormProps) => {
    const formikStateAndHelpers = useFormik<LoginFields>({
        initialValues: LOGIN_INITIAL_VALUES,
        onSubmit: handleSubmit,
    });

    return (
        <FormikProvider value={formikStateAndHelpers}>
            <form>
                <TextWithIcon
                    iconUrl="/icons/auth/mail.svg"
                    width={24}
                    height={24}
                    className={styles['Login-LabelWrapper']}
                >
                    <TextInputField
                        type="email"
                        placeholder="Электронная почта"
                        fieldName="email"
                        label="Электронная почта"
                        hiddenLabel
                    />
                </TextWithIcon>
                <TextWithIcon
                    iconUrl="/icons/auth/password.svg"
                    width={24}
                    height={24}
                    className={styles['Login-LabelWrapper']}
                >
                    <TextInputField
                        type="password"
                        placeholder="Пароль"
                        fieldName="password"
                        label="Пароль"
                        hiddenLabel
                    />
                </TextWithIcon>
            </form>
            <Button className={styles['Login-Button']} onClick={formikStateAndHelpers.submitForm} text="Войти" />
        </FormikProvider>
    );
};
