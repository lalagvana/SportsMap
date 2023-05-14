import { Modal } from 'src/client/shared/components/Modal';
import { Upload } from 'src/client/shared/components/Upload';
import { Button } from 'src/client/shared/components/Button';
import { TextWithIcon } from 'src/client/shared/components/TextWithIcon';

import { FILE_REQUIREMENTS } from './FileLoadModal.constants';
import { useOnFileChange, useValidation } from './FileLoadModal.hooks';

import styles from './FileLoadModal.module.css';

type FileLoadModalProps = {
    hide: () => void;
};

export const FileLoadModal = ({ hide }: FileLoadModalProps) => {
    const { validationStatus, uploadHandler, saveHandler, isLoading, fileList } = useOnFileChange(hide);
    const { icon, color, text } = useValidation(validationStatus, isLoading);

    return (
        <Modal
            afterClose={hide}
            open
            title={<h2 className={styles['FileLoadModal-Title']}>Загрузка файла</h2>}
            footer={
                <Button text="Сохранить" disabled={!validationStatus} onClick={saveHandler} isLoading={isLoading} />
            }
            width={578}
            onCancel={hide}
        >
            <div className={styles['FileLoadModal']}>
                <div className={styles['FileLoadModal-Requirements']}>
                    <ul className={styles['FileLoadModal-List']}>
                        {FILE_REQUIREMENTS.map((requirement, index) => (
                            <li className={styles['FileLoadModal-ListItem']} key={index}>
                                {requirement}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles['FileLoadModal-UploadSection']}>
                    <Upload onChange={uploadHandler} fileList={fileList} accept=".xlsx,.xls,.xlt">
                        <Button text="Загрузить" />
                    </Upload>
                    {(validationStatus !== null || isLoading) && (
                        <TextWithIcon
                            iconType={icon}
                            className={[
                                styles['FileLoadModal-Validation'],
                                styles[`FileLoadModal-Validation_${color}`],
                            ].join(' ')}
                        >
                            <span className={styles['FileLoadModal-ValidationText']}>{text}</span>
                        </TextWithIcon>
                    )}
                </div>
            </div>
        </Modal>
    );
};
