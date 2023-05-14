import { fetch } from '../fetch';
import { apiRoutes } from '../apiRoutes';

import { ExcelImport, ExcelValidate, ExcelExport } from './types';

export const excelImport = (body: ExcelImport.Body) => {
    return fetch(apiRoutes.excelImport, {
        method: 'POST',
        data: body,
        headers: {
            'Content-Type': 'multipart/form-data;',
        },
    });
};

export const excelExport = (body: ExcelExport.Body) => {
    return fetch<ExcelExport.Response>(apiRoutes.excelExport, {
        method: 'POST',
        data: body,
    });
};

export const validateExcel = (body: ExcelValidate.Body) => {
    return fetch(apiRoutes.excelValidate, {
        method: 'POST',
        data: body,
        headers: {
            'Content-Type': 'multipart/form-data;',
        },
    });
};
