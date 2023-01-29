import { apiRoutes } from './apiRoutes';

export const UNPROTECTED_PATHS = [
    apiRoutes.login,
    apiRoutes.resfreshToken,
    apiRoutes.facilitySearch,
    apiRoutes.ping,
    apiRoutes.facility,
    apiRoutes.facilitySearch,
];
