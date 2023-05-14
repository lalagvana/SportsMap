import React from 'react';
import Image from 'next/image';
import { motion, MotionConfig } from 'framer-motion';

import { useTheme } from 'src/client/shared/hooks/use-theme';
import { SearchFacilities } from 'src/client/shared/utils/api/facilities';

import { Achievements } from './components/Achievements';
import { Beginning } from './components/Beginning/Beginning';
import { Development } from './components/Development';
import { Features } from './components/Features';
import { MapView } from './components/MapView';

import styles from './Main.module.css';

export type MainScreenPageProps = {
    facilityObjects?: SearchFacilities.Response;
};

export const Main = ({ facilityObjects: initialFacilityObjects }: MainScreenPageProps) => {
    const { isLight } = useTheme();

    return (
        <main className={styles['Main']}>
            <Beginning />
            <MotionConfig transition={{ delay: 0.1, type: 'spring', stiffness: 50 }}>
                <motion.section
                    className={styles['Main-Sponsors']}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {!isLight && <div className={styles['Main-Surface']} />}
                    <Image width={297} height={80} src="/images/contacts/spbu.svg" layout="fixed" />
                    <Image width={226} height={80} src="/images/contacts/admin_dis.svg" layout="fixed" />
                    <Image width={243} height={80} src="/images/contacts/admin_spb.svg" layout="fixed" />
                </motion.section>
                <Features />
                <MapView initialFacilityObjects={initialFacilityObjects} />
                <Achievements />
                <Development />
            </MotionConfig>
        </main>
    );
};
