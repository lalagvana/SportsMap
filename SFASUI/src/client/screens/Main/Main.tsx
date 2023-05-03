import React from 'react';
import Image from 'next/image';

import { Achievements } from './components/Achievements';
import { Beginning } from './components/Beginning/Beginning';
import { Development } from './components/Development';
import { Features } from './components/Features';

import styles from './Main.module.css';


export const Main = () => {
    return (
        <main>
            <Beginning />
            <section className={styles['Main-Sponsors']}>
                <Image width={222} height={61} src="/images/contacts/SPBu.png" layout="fixed" />
                <Image width={226} height={72} src="/images/contacts/District.png" layout="fixed" />
                <Image width={201} height={61} src="/images/contacts/Administration.png" layout="fixed" />
            </section>
            <Features />
            <Achievements />
            <Development />
        </main>
    );
};
