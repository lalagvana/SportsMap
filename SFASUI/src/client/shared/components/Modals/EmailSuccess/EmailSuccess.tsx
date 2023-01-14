import { Success } from 'src/client/shared/components/Modals/Success';
import { ModalProps } from 'src/client/shared/types/modals';

import styles from './EmailSuccess.module.css';

export const EmailSuccess = ({ onClose }: ModalProps) => {
    return (
        <div className={styles.emailSucsDiv}>
            <Success onClose={onClose} />
        </div>
    );
};
