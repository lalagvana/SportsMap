import { Modal as ModalBase, ModalProps } from 'antd';

import './Modal.css';
import Close from "../../../../../public/icons/close.svg";
import React from "react";

export const Modal = ({ ...rest }: ModalProps) => {
    return <ModalBase closeIcon={<Close width={10} height={10} />} destroyOnClose centered {...rest} />;
};
