import { apiRoutes } from './apiRoutes';

const PREFIX = 'https://sportsmap.spb.ru'

export const UNPROTECTED_PATHS = [
    apiRoutes.login,
    apiRoutes.user,
    apiRoutes.resfreshToken,
    apiRoutes.facilitySearch,
    `${PREFIX}/${apiRoutes.facilitySearch}`,
];