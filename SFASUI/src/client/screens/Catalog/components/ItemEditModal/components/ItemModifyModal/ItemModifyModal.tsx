import React from 'react';

import { FacilityType } from "src/client/shared/types/facilities";

import { ItemEditModal } from '../..';
import { useSubmitHandler } from './ItemModifyModal.hooks';

type ItemAddModalProps = {
    hide?: () => void;
    initialValues: FacilityType;
};

export const ItemModifyModal = ({ hide, initialValues }: ItemAddModalProps) => {
    const submitHandler = useSubmitHandler({ onSuccess: hide, id: initialValues.id });

    return <ItemEditModal initialValues={initialValues} handleSubmit={submitHandler} />;
};
