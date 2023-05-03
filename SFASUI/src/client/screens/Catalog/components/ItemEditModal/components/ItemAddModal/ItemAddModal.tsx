import React from 'react';

import { INITIAL_VALUES, ItemEditModal } from '../..';
import { useSubmitHandler } from './ItemAddModal.hooks';

type ItemAddModalProps = {
    hide: () => void;
};

export const ItemAddModal = ({ hide }: ItemAddModalProps) => {
    const submitHandler = useSubmitHandler({ onSuccess: hide });

    return <ItemEditModal initialValues={INITIAL_VALUES} handleSubmit={submitHandler} hide={hide} isNew />;
};
