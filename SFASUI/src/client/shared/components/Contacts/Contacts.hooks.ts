import { useMemo } from 'react';

export const useContactsLinks = () =>
    useMemo(
        () => [
            {
                iconUrl: '/icons/contacts/address.svg',
                text: 'Санкт-Петербург, Среднеохтинский пр., 50',
            },
            {
                iconUrl: '/icons/contacts/phone.svg',
                text: '+7 (812) 576-86-15',
            },
            {
                iconUrl: '/icons/contacts/time.svg',
                text: 'Пн-Пт 09:00 - 18:00',
            },
            {
                iconUrl: '/icons/contacts/mail.svg',
                text: 'admin2023@mail.ru',
            },
        ],
        []
    );
