import { FormikProvider, useFormik } from 'formik';
import React from 'react';

import { TextInputField } from 'src/client/shared/components/TextInput/formik/TextInputField';
import { Button } from 'src/client/shared/components/Button';
import { TextWithIcon } from 'src/client/shared/components/TextWithIcon';

import { RegisterFormField } from './RegisterForm.types';
import { INITIAL_REGISTER_FORM_FIELDS } from './RegisterForm.constants';

import styles from './RegisterForm.module.css';

type RegisterFormProps = {
    handleSubmit: (fields: RegisterFormField) => Promise<void>;
};

export const RegisterForm = ({ handleSubmit }: RegisterFormProps) => {
    const formikStateAndHelpers = useFormik<RegisterFormField>({
        initialValues: INITIAL_REGISTER_FORM_FIELDS,
        onSubmit: handleSubmit,
    });

    return (
        <FormikProvider value={formikStateAndHelpers}>
            <form>
                <TextWithIcon
                    iconUrl="/icons/auth/user.svg"
                    width={24}
                    height={24}
                    className={styles['Register-LabelWrapper']}
                >
                    <TextInputField
                        placeholder="Имя"
                        fieldName="name"
                        label="Имя"
                        hiddenLabel
                        className={styles['Register-Input']}
                    />
                </TextWithIcon>
                <TextInputField
                    placeholder="Фамилия"
                    fieldName="surname"
                    label="Фамилия"
                    hiddenLabel
                    className={styles['Register-Input_noIcon']}
                />
                <TextWithIcon
                    iconUrl="/icons/auth/mail.svg"
                    width={24}
                    height={24}
                    className={styles['Register-LabelWrapper']}
                >
                    <TextInputField
                        type="email"
                        placeholder="Электронная почта"
                        fieldName="email"
                        label="Электронная почта"
                        hiddenLabel
                        className={styles['Register-Input']}
                    />
                </TextWithIcon>
                <TextWithIcon
                    iconUrl="/icons/auth/password.svg"
                    width={24}
                    height={24}
                    className={styles['Register-LabelWrapper']}
                >
                    <TextInputField
                        type="password"
                        placeholder="Пароль"
                        fieldName="password"
                        label="Пароль"
                        hiddenLabel
                        className={styles['Register-Input']}
                    />
                </TextWithIcon>
                <TextInputField
                    type="password"
                    placeholder="Повторите пароль"
                    fieldName="confirmPassword"
                    label="Повторите пароль"
                    hiddenLabel
                    className={styles['Register-Input_noIcon']}
                />
            </form>
            <Button
                className={styles['Register-Button']}
                text="Зарегистрироваться"
                onClick={formikStateAndHelpers.submitForm}
            />
        </FormikProvider>
    );
};
