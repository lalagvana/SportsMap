import { Login } from 'src/client/shared/utils/api/login';

import { LoginFields } from "./LoginForm.types";

export const createLoginUser = (fields: LoginFields): Login.Body => ({
    email: fields.email,
    password: fields.password,
});
