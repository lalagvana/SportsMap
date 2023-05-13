import { ProposalFormFields } from './ProposalForm.types';

export const createProposal = (fields: ProposalFormFields) => ({
    text: fields.note,
    last_name: fields.surname,
    email: fields.email,
    first_name: fields.name,
});
