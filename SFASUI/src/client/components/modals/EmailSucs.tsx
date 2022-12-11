import Success from './Success';
import { ModalProps } from 'client/components/modals/types';

import styles from './EmailSucs.module.css';

const EmailSucs = ({ onClose }: ModalProps) => {
    return (
        <div className={styles.emailSucsDiv}>
            <Success onClose={onClose} />
        </div>
    );
};

export default EmailSucs;
