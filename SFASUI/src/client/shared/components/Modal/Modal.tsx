import { Modal as ModalBase, ModalProps } from 'antd';

import './Modal.css';

export const Modal = ({ ...rest }: ModalProps) => {
    return <ModalBase destroyOnClose centered {...rest} />;
};
