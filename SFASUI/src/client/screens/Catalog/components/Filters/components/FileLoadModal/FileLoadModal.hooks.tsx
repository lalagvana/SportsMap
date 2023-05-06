import { useCallback, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import type { UploadFile } from 'antd/es/upload/interface';
import { mutate } from 'swr';
import { UploadChangeParam } from 'antd/es/upload/interface';

import { excelImport, validateExcel } from 'src/client/shared/utils/api/excel';
import { apiRoutes } from 'src/client/shared/utils/api/apiRoutes';
import { prepareMessage } from 'src/client/shared/utils/notifications';
import { Notification } from "src/client/shared/components/Notification";

export const useOnFileChange = (onSuccess: () => void) => {
    const [isLoading, setIsLoading] = useState(false);
    const [validationStatus, setValidationStatus] = useState<null | boolean>(null);
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    const uploadHandler = useCallback(
        async ({ file }: UploadChangeParam) => {
            if (file.status === 'removed') {
                setValidationStatus(null);
                setFileList([]);
                return;
            }

            if (file.status === 'done') {
                setFileList([file]);
            }

            if (file && fileList[0]?.uid !== file.uid) {
                try {
                    setIsLoading(true);
                    setFileList([file]);
                    await validateExcel(file);
                    setValidationStatus(true);
                    setIsLoading(false);
                } catch (e) {
                    setIsLoading(false);
                    toast(<Notification type="error" imageType='cross' description={prepareMessage(e, 'Ошибка валидации файла')} />);
                    setValidationStatus(false);
                }
            }
        },
        [validateExcel, setValidationStatus, setFileList, fileList]
    );

    const saveHandler = useCallback(async () => {
        try {
            if (fileList.length === 0) {
                throw Error('Загрузите валидный файл');
            }

            if (fileList[0]) {
                await excelImport(fileList[0]);
                setValidationStatus(null);
                setFileList([]);
            }
            toast(<Notification type="success" heading='Вы загрузили файл' description='Мы добавим все новые объекты' />);
            onSuccess();
            await mutate(apiRoutes.facilitySearch);
        } catch (e) {
            toast(<Notification type="error" imageType='cross' description={e.message} />);
        }
    }, [setFileList, setValidationStatus, fileList, validationStatus, onSuccess]);

    return {
        validationStatus,
        uploadHandler,
        saveHandler,
        isLoading,
        fileList,
    };
};

export const useValidation = (status: boolean | null, progress: boolean) =>
    useMemo(() => {
        if (progress) {
            return {
                text: 'файл проверяется',
                icon: '/icons/excel/blue.png',
                color: 'blue',
            };
        }

        if (status) {
            return {
                text: 'файл прошёл проверку',
                icon: '/icons/excel/green.png',
                color: 'green',
            };
        }

        return {
            text: 'файл не прошёл проверку',
            icon: '/icons/excel/red.png',
            color: 'red',
        };
    }, [status, progress]);
