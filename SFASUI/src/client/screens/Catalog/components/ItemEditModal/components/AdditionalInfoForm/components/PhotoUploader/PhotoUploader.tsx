import React from 'react';

import { Upload } from 'src/client/shared/components/Upload';
import { Button } from 'src/client/shared/components/Button';

import { useOnFileChange } from './PhotoUploader.hooks';

import styles from './PhotoUploader.module.css';

export const PhotoUploader = () => {
    const { uploadHandler, fileList } = useOnFileChange();

    return (
        <div className={styles['PhotoUploader']}>
            <div className={styles['PhotoUploader-Label']}>
                <span className={styles['PhotoUploader-Label_main']}>Фотографии</span>
                <span className={styles['PhotoUploader-Label_subtext']}>(максимальное количество: 5)</span>
            </div>
            <Upload onChange={uploadHandler} maxCount={5} fileList={fileList} listType="picture" accept="image/*">
                <Button text="Загрузить" />
            </Upload>
        </div>
    );
};
