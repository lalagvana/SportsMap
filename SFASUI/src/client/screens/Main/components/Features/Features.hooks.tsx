import React, { useMemo } from 'react';

import { OBJECTS_TYPE } from './Features.constants';

import styles from './Features.module.css';

export const useItems = () =>
    useMemo(
        () => [
            { name: 'basketball', heading: 'Для кого', text: <p className={styles['Features-Text']}>Для всех!</p> },
            {
                name: 'golf',
                heading: 'Какие объекты',
                text: (
                    <ul className={styles['Features-List']}>
                        {OBJECTS_TYPE.map((item) => (
                            <li key={item} className={styles['Features-Text']}>
                                {item}
                            </li>
                        ))}
                    </ul>
                ),
            },
            {
                name: 'racket',
                heading: 'Зачем',
                text: <p className={styles['Features-Text']}>Мы поможем Вам и Вашим близким наполнить досуг спортом</p>,
            },
            {
                name: 'football',
                heading: 'Как',
                text: (
                    <p className={styles['Features-Text']}>
                        Найдите локацию для занятий спортом с помощью фильтров{' '}
                        <a className={styles['Features-TextLink']} href="/map">
                            на карте
                        </a>{' '}
                        или{' '}
                        <a className={styles['Features-TextLink']} href="/search">
                            в каталоге
                        </a>
                    </p>
                ),
            },
        ],
        []
    );
