import { FormikProvider, useFormik } from 'formik';
import React from 'react';

import { TextInputField } from 'src/client/shared/components/TextInput/formik/TextInputField';
import { Button } from 'src/client/shared/components/Button';

import { LOGIN_INITIAL_VALUES } from './LoginForm.constants';
import { LoginFields } from './LoginForm.types';

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
            <h1>Войти в SportsMap</h1>
            <form>
                <TextInputField type="email" placeholder="Логин" fieldName="email" label="Логин" />
                <TextInputField type="password" placeholder="Пароль" fieldName="password" label="Пароль" />
            </form>
          <Button onClick={formikStateAndHelpers.submitForm} text="Войти" />
        </FormikProvider>
    );
};
