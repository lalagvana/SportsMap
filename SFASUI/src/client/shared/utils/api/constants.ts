import { apiRoutes } from './apiRoutes';

export const UNPROTECTED_PATHS = [
    apiRoutes.login,
    apiRoutes.user,
    apiRoutes.resfreshToken,
    apiRoutes.facility,
    apiRoutes.facilitySearch,
    apiRoutes.facilityAge,
    apiRoutes.facilityCoveringType,
    apiRoutes.facilityPayingType,
    apiRoutes.facilityOwningType,
    apiRoutes.facilityType,
];