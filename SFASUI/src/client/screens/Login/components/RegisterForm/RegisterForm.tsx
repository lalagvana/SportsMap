import { FormikProvider, useFormik } from 'formik';
import React from 'react';

import { TextInputField } from 'src/client/shared/components/TextInput/formik/TextInputField';
import { Button } from 'src/client/shared/components/Button';

import { RegisterFormField } from './RegisterForm.types';
import { INITIAL_REGISTER_FORM_FIELDS } from './RegisterForm.constants';

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
            <h1>Зарегистрироваться</h1>
            <form>
                <TextInputField placeholder="Имя" fieldName="name" label="Имя" />
                <TextInputField placeholder="Фамилия" fieldName="surname" label="Фамилия" />
                <TextInputField
                    type="email"
                    placeholder="Электронная почта"
                    fieldName="email"
                    label="Электронная почта"
                />
                <TextInputField type="password" placeholder="Пароль" fieldName="password" label="Пароль" />
                <TextInputField
                    type="password"
                    placeholder="Повторите пароль"
                    fieldName="confirmPassword"
                    label="Повторите пароль"
                />
                <Button text="Зарегистрироваться" onClick={formikStateAndHelpers.submitForm} />
            </form>
        </FormikProvider>
    );
};
