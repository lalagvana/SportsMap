import Image from 'next/image';

import { WORKING_DAYS } from './WorkingHoursForm.constans';
import { WorkingHoursInput } from './components/WorkingHoursInput';

import styles from './WorkingHoursForm.module.css';

export const WorkingHoursForm = () => {
    return (
        <form className={styles['WorkingHoursForm']}>
            <fieldset className={styles['WorkingHoursForm-Data']}>
                <h4 className={styles['WorkingHoursForm-Header']}>Расписание</h4>
                {WORKING_DAYS.map((day) => (
                    <WorkingHoursInput day={day} />
                ))}
            </fieldset>
            <div className={styles['WorkingHoursForm-Image']}>
                <Image width={476} height={546} src="/images/Clock.svg" layout="fixed" />
            </div>
        </form>
    );
};
