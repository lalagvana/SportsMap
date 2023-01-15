import { EmailSend } from 'src/client/shared/utils/api/emails';

import { FormFields } from '.';

export const createEmailRequest = (fields: FormFields): EmailSend.Body => ({
    fullName: fields.name,
    email: fields.email,
    text: fields.message,
});
