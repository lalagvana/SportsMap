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
                    <div className={styles['Main-Sponsors_desktop']}>
                        <Image width={297} height={80} src="/images/contacts/spbu.svg" layout="fixed" />
                        <Image width={226} height={80} src="/images/contacts/admin_dis.svg" layout="fixed" />
                        <Image width={243} height={80} src="/images/contacts/admin_spb.svg" layout="fixed" />
                    </div>
                    <div className={styles['Main-Sponsors_mobile']}>
                        <Image width={44} height={50} src="/images/contacts/spbu_mobile.svg" layout="fixed" />
                        <Image width={44} height={50} src="/images/contacts/admin_dis_mobile.svg" layout="fixed" />
                        <Image width={44} height={50} src="/images/contacts/admin_spb_mobile.svg" layout="fixed" />
                    </div>
                </motion.section>
                <Features />
                <MapView initialFacilityObjects={initialFacilityObjects} />
                <Achievements />
                <Development />
            </MotionConfig>
        </main>
    );
};
