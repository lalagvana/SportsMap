import React from 'react';
import Image from 'next/image';

import { useTheme } from 'src/client/shared/hooks/use-theme';

import { Achievements } from './components/Achievements';
import { Beginning } from './components/Beginning/Beginning';
import { Development } from './components/Development';
import { Features } from './components/Features';
import { MapView } from './components/MapView';

import styles from './Main.module.css';
import { SearchFacilities } from '../../shared/utils/api/facilities';

export type MainScreenPageProps = {
    facilityObjects?: SearchFacilities.Response;
};

export const Main = ({ facilityObjects: initialFacilityObjects }: MainScreenPageProps) => {
    const { isLight } = useTheme();

    return (
        <main className={styles['Main']}>
            <Beginning />
            <section className={styles['Main-Sponsors']}>
                {!isLight && <div className={styles['Main-Surface']} />}
                <Image width={297} height={80} src="/images/contacts/spbu.svg" layout="fixed" />
                <Image width={226} height={80} src="/images/contacts/admin_dis.svg" layout="fixed" />
                <Image width={243} height={80} src="/images/contacts/admin_spb.svg" layout="fixed" />
            </section>
            <Features />
            <MapView initialFacilityObjects={initialFacilityObjects} />
            <Achievements />
            <Development />
        </main>
    );
};
