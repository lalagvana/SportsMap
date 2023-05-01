import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';

import { validateExcel } from 'src/client/shared/utils/api/excel';

export const useOnFileChange = () => {
    const [validationStatus, setValidationStatus] = useState<null | boolean>(null);

    const uploadHandler = useCallback(
        async ({ file }) => {
            if (file) {
                try {
                    await validateExcel(file);
                    setValidationStatus(true);
                } catch (e) {
                    toast.error(e.message);
                    setValidationStatus(false);
                }
            } else {
                setValidationStatus(null);
            }
        },
        [validateExcel, setValidationStatus]
    );

    const removeHandler = useCallback(() => setValidationStatus(null), [setValidationStatus]);

    return {
        validationStatus,
        uploadHandler,
        removeHandler,
    };
};
