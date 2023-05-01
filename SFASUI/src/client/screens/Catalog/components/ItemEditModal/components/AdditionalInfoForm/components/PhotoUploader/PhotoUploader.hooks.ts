import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';

export const useOnFileChange = () => {
    const [validationStatus, setValidationStatus] = useState<null | boolean>(null);

    const uploadHandler = useCallback(
        async ({ file }) => {
            if (file) {
                try {
                    setValidationStatus(true);
                } catch (e) {
                    toast.error(e.message);
                    setValidationStatus(false);
                }
            } else {
                setValidationStatus(null);
            }
        },
        [setValidationStatus]
    );

    const removeHandler = useCallback(() => setValidationStatus(null), [setValidationStatus]);

    return {
        validationStatus,
        uploadHandler,
        removeHandler,
    };
};
