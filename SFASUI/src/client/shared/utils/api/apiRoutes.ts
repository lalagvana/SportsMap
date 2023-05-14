const BACKEND_URL = 'api';

export const apiRoutes = {
    login: `${BACKEND_URL}/user/login`,
    resfreshToken: `${BACKEND_URL}/user/token/refresh`,
    refreshPassword(token: string) {
        return `${BACKEND_URL}/user/password-refresh/${token}`;
    },

    user: `${BACKEND_URL}/user`,
    users(id: number) {
        return `${BACKEND_URL}/user/${id}`;
    },

    facility: `${BACKEND_URL}/facility`,
    facilitySearch: `${BACKEND_URL}/facility/search`,
    facilities(id: string) {
        return `${BACKEND_URL}/facility/${id}`;
    },

    facilityType: `${BACKEND_URL}/facility-type`,
    facilityCoveringType: `${BACKEND_URL}/facility-covering-type`,
    facilityPayingType: `${BACKEND_URL}/facility-paying-type`,
    facilityOwningType: `${BACKEND_URL}/facility-owning-type`,
    facilityAge: `${BACKEND_URL}/facility-age`,

    excelImport: `${BACKEND_URL}/excel/import`,
    excelValidate: `${BACKEND_URL}/excel/validate`,
    excelExport: `${BACKEND_URL}/excel/export`,

    facilityPhoto(id: string) {
        return `${BACKEND_URL}/facility/${id}/photo`;
    },
    facilityPhotoDelete(id: string, photoId: string) {
        return `${BACKEND_URL}/facility/${id}/photo/${photoId}`;
    },

    emailProposal: `${BACKEND_URL}/email/suggestions`,
    emailNewObject: `${BACKEND_URL}/email/offer-object`,
    emailSubscribe: `${BACKEND_URL}/email/subscribe`,
    emailUnsubscribe: `${BACKEND_URL}/email/unsubscribe`,
    newPassword: `${BACKEND_URL}/email/new-password`,
};
