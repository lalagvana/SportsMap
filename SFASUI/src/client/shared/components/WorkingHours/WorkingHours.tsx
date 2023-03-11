import { useState } from 'react';
import Image from 'next/image';

import { TextWithIcon } from 'src/client/shared/components/TextWithIcon';

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
    const [isOpened, setOpened] = useState(false);

    return (
        <div className={styles['WorkingHours']}>
            <TextWithIcon iconUrl="/icons/address.svg">
                <div className={styles['WorkingHours-ToggleWrapper']}>
                    <span>Часы работы</span>
                    <div
                      role="button"
                      onClick={() => setOpened(!isOpened)}
                      className={[
                          styles['WorkingHours-Toggle'],
                          isOpened ? styles['WorkingHours-Toggle_opened'] : styles['WorkingHours-Toggle_closed'],
                      ].join(' ')}
                    >
                        <Image width={10} height={10} src="/icons/toggle.png" layout="fixed" />
                    </div>
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
