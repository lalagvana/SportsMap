import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { YMaps } from '@pbe/react-yandex-maps';

import { Main } from 'src/client/screens/Main';

describe('Главная страница', () => {
    it('Рендерится кнопка "на карту"', () => {
        const { getAllByText } = render(
            <YMaps query={{ apikey: 'f90d801e-5706-4c4d-96df-2742aec12e8f' }}>
                <Main />
            </YMaps>
        );
        const button = getAllByText('Перейти на карту');

        expect(button.length).toBe(2);
    });
});
