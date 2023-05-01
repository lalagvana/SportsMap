import { Register } from "src/client/shared/utils/api/login";

import { RegisterFormField } from "./RegisterForm.types";

export const createRegisterUser = (fields: RegisterFormField): Register.Body => ({
    last_name: fields.surname,
    first_name: fields.name,
    email: fields.email,
    password: fields.password,
});
