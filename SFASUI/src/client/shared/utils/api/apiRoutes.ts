const BACKEND_URL = 'https://sportsmap.spb.ru/api';

export const apiRoutes = {
    ping: `${BACKEND_URL}/ping`,

    authping: `${BACKEND_URL}/authping`,

    login: `${BACKEND_URL}/admin/login`,

    resfreshToken: `${BACKEND_URL}/admin/token/refresh`,

    user: `${BACKEND_URL}/admin/users`,

    users(id: number) {
        return `${BACKEND_URL}/admin/login/users/${id}`;
    },

    emailSubscribe(email: string) {
        return `${BACKEND_URL}/email/subscribe/${email}`;
    },

    emailSend: `${BACKEND_URL}/email/send`,

    facility: `${BACKEND_URL}/facility/facility`,

    facilitySearch: `${BACKEND_URL}/facility/search`,

    facilities(id: number) {
        return `${BACKEND_URL}/facility/facility/${id}`;
    },

    facilityInfo(id: number) {
        return `${BACKEND_URL}/facility/${id}`;
    },
};
