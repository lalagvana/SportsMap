import { apiRoutes } from './apiRoutes';

const PREFIX = 'https://sportsmap.spb.ru';

export const UNPROTECTED_PATHS = [
    apiRoutes.login,
    apiRoutes.user,
    apiRoutes.resfreshToken,
    apiRoutes.facilitySearch,
    apiRoutes.emailNewObject,
    apiRoutes.emailProposal,
    apiRoutes.emailSubscribe,
    `${PREFIX}/${apiRoutes.facilitySearch}`,
];
