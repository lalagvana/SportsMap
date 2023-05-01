import Image from 'next/image';

import { Modal } from 'src/client/shared/components/Modal';
import { Upload } from 'src/client/shared/components/Upload';
import { Button } from 'src/client/shared/components/Button';

import { FILE_REQUIREMENTS } from './FileLoadModal.constants';
import { useOnFileChange } from "./FileLoadModal.hooks";

import styles from './FileLoadModal.module.css';

type FileLoadModalProps = {
    hide: () => void;
};

export const FileLoadModal = ({ hide }: FileLoadModalProps) => {
    const { validationStatus, uploadHandler, removeHandler } = useOnFileChange();

    return (
        <Modal
            afterClose={hide}
            open
            title="Загрузка файла"
            closeIcon={<Image width={10} height={10} src="/icons/close.svg" layout="fixed" />}
            footer={null}
            width={578}
        >
            <div className={styles['FileLoadModal']}>
                <span>Требования к файлу</span>
                <ul>
                    {FILE_REQUIREMENTS.map((requirement, index) => (
                        <li key={index}>{requirement}</li>
                    ))}
                </ul>
                <span>Статус валидации: {String(validationStatus)}</span>
                <Upload onChange={uploadHandler} onRemove={removeHandler}>
                    <Button text="Загрузить" />
                </Upload>
            </div>
        </Modal>
    );
};
