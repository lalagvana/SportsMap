import { useCallback, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import { useFormikContext } from 'formik';
import { UploadChangeParam, UploadFile } from 'antd/es/upload/interface';

import { prepareMessage } from 'src/client/shared/utils/notifications';
import { addPhoto, deletePhoto } from 'src/client/shared/utils/api/photos';
import { FacilityType } from 'src/client/shared/types/facilities';

export const useOnFileChange = () => {
    const { values } = useFormikContext<FacilityType>();
    const initialFileList = useMemo(
        () =>
            values.photo.map((item) => ({
                uid: item.id,
                name: item.filename || 'unknown',
                url: item.url,
                status: 'done',
            })),
        []
    );

    const [fileListState, setFileListState] = useState<UploadFile[]>(initialFileList);

    const uploadHandler = useCallback(
        async ({ file, fileList }: UploadChangeParam) => {
            if (file.status === 'removed') {
                try {
                    await deletePhoto(values.id, file.uid);
                    setFileListState(fileList.filter((item) => item.uid !== file.uid));
                } catch (e) {
                    toast.error(prepareMessage(e, 'Ошибка удаления фотографии'));
                }
                return;
            }

            if (file && !fileListState.find((item) => item.uid === file.uid)) {
                try {
                    setFileListState(fileList.slice(-5));

                    const response = await addPhoto(values.id, file);

                    const filteredFileList = fileList.filter((item) => file.uid !== item.uid);
                    setFileListState([...filteredFileList, { ...file, uid: response.id, url: response.url, status: 'done' }]);
                } catch (e) {
                    toast.error(prepareMessage(e, 'Ошибка загрузки фотографии'));
                }
            }
        },
        [fileListState, deletePhoto, addPhoto]
    );

    return {
        uploadHandler,
        fileList: fileListState,
    };
};
