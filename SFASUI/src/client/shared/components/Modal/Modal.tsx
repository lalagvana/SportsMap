import { Modal as ModalBase, ModalProps } from 'antd';

export const Modal = ({ ...rest }: ModalProps) => {
    return <ModalBase destroyOnClose centered {...rest} />;
};
