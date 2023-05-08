import { useMemo } from 'react';

export const useContactsLinks = () =>
    useMemo(
        () => [
            {
                iconType: 'address',
                text: 'Санкт-Петербург, Среднеохтинский пр., 50',
            },
            {
                iconType: 'phone',
                text: '+7 (812) 576-86-15',
            },
            {
                iconType: 'time',
                text: 'Пн-Пт 09:00 - 18:00',
            },
            {
                iconType: 'mail',
                text: 'mail@sportsmap.spb.ru',
            },
        ],
        []
    );
