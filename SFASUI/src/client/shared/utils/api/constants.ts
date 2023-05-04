import { apiRoutes } from './apiRoutes';

export const UNPROTECTED_PATHS = [
    apiRoutes.login,
    apiRoutes.user,
    apiRoutes.resfreshToken,
    apiRoutes.facilitySearch
];