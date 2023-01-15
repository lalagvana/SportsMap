import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { Main } from 'src/client/screens/Main';

describe('Главная страница', () => {
    it('Рендерится кнопка "на карту"', () => {
        const { getByText } = render(<Main />);
        const button = getByText('На карту');

        expect(button).toBeInTheDocument();
    });
});
