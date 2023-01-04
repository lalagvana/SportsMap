const BACKEND_URL = 'https://84.201.130.50';

export const apiRoutes = {
    admin: `${BACKEND_URL}/api/admin/login`,

    login: `${BACKEND_URL}/api/admin/login`,

    confirm: `${BACKEND_URL}/api/admin/confirm`,

    passwordResetLink: `${BACKEND_URL}/api/admin/sendpasswordresetlink`,

    passwordReset: `${BACKEND_URL}/api/admin/passwordreset`,

    resfreshToken: `${BACKEND_URL}/api/admin/token/refresh`,

    user: `${BACKEND_URL}/api/admin/users`,

    users(id: number) {
        return `${BACKEND_URL}/api/admin/login/users/${id}`;
    },

    emailSubscribe(email: string) {
        return `${BACKEND_URL}/api/email/subscribe/${email}`;
    },

    emailSend: `${BACKEND_URL}/api/email/send`,

    facility: `${BACKEND_URL}/api/facility/facility`,

    facilitySearch: `${BACKEND_URL}/api/facility/search`,

    facilities(id: number) {
        return `${BACKEND_URL}/api/facility/facility/${id}`;
    },

    facilityInfo(id: number) {
        return `${BACKEND_URL}/api/facility/${id}`;
    },
};
