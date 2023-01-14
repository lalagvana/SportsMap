import { LoginFields } from '.';
import { Login } from 'src/client/shared/utils/api/login';

export const createLoginUser = (fields: LoginFields): Login.Body => ({
    email: fields.email,
    password: fields.password,
});
