import React from 'react';

import { MapView } from '../MapView';
import { YMaps } from "@pbe/react-yandex-maps";

export default {
    title: 'Main/MapView',
    component: MapView,
};

export const playground = () => {
    return (
        <YMaps query={{ apikey: 'f90d801e-5706-4c4d-96df-2742aec12e8f' }}>
            <MapView />
        </YMaps>
    );
};
