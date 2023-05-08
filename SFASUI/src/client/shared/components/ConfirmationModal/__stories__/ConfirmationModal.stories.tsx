import React from 'react';

import { ConfirmationModal } from '../ConfirmationModal';

export default {
    title: 'Shared/ConfirmationModal',
    component: ConfirmationModal,
};

export const playground = () => {
    return <ConfirmationModal className="light_theme" width={450} description="Объект будет удален безвозвратно" title="Удалить объект?" />;
};
