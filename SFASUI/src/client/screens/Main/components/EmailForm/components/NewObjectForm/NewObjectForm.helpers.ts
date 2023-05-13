import { NewObjectFormFields } from './NewObjectForm.types';

export const createNewObject = (fields: NewObjectFormFields) => ({
    address: fields.address,
    note: fields.note,
    owner: fields.owner,
});
