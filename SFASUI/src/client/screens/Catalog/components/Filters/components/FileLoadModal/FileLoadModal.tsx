import Image from 'next/image';

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
            closeIcon={<Image width={10} height={10} src="/icons/close.svg" layout="fixed" />}
            footer={<Button text="Сохранить" disabled={!validationStatus} onClick={saveHandler} />}
            width={578}
            onCancel={hide}
        >
            <div className={styles['FileLoadModal']}>
                <div className={styles['FileLoadModal-Requirements']}>
                    <h3 className={styles['FileLoadModal-RequirementsTitle']}>Требования</h3>
                    <ul className={styles['FileLoadModal-List']}>
                        {FILE_REQUIREMENTS.map((requirement, index) => (
                            <li className={styles['FileLoadModal-ListItem']} key={index}>
                                {requirement}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles['FileLoadModal-UploadSection']}>
                    <Upload onChange={uploadHandler} fileList={fileList}>
                        <Button text="Загрузить" />
                    </Upload>
                    {(validationStatus !== null || isLoading) && (
                        <TextWithIcon
                            iconUrl={icon}
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
