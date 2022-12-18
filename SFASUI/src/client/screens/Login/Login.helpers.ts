import { LoginFields } from '.';
import { Login } from '../../shared/utils/api/login';

export const createLoginUser = (fields: LoginFields): Login.Body => ({
    name: fields.email,
    password: fields.password,
});
