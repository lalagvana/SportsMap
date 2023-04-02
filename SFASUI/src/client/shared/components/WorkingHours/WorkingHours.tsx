import { useState } from 'react';

import { TextWithIcon } from 'src/client/shared/components/TextWithIcon';
import { Toggle } from 'src/client/shared/components/Toggle';

import { WorkingHoursType } from './WorkingHours.types';

import styles from './WorkingHours.module.css';

type WorkingHoursProps = {
    hours: WorkingHoursType;
};

const keyToDate = {
    monday: 'Понедельник',
    tuesday: 'Вторник',
    wednesday: 'Среда',
    thursday: 'Четверг',
    friday: 'Пятница',
    saturday: 'Суббота',
    sunday: 'Воскресенье',
};

export const WorkingHours = ({ hours }: WorkingHoursProps) => {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <div className={styles['WorkingHours']}>
            <TextWithIcon iconUrl="/icons/address.svg">
                <div className={styles['WorkingHours-ToggleWrapper']}>
                    <span className={styles['WorkingHours-ToggleText']}>Часы работы</span>
                    <Toggle isOpened={isOpened} onClick={() => setIsOpened(!isOpened)} />
                </div>
            </TextWithIcon>
            {isOpened && (
                <ul className={styles['WorkingHours-Details']}>
                    {Object.keys(hours).map((day) => (
                        <li className={styles['WorkingHours-DetailsItem']}>
                            <span className={styles['WorkingHours-Day']}>{keyToDate[day]}</span>
                            <span className={styles['WorkingHours-Value']}>
                                {hours[day].open ? `${hours[day].from} - ${hours[day].to}` : 'Закрыто'}
                            </span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
