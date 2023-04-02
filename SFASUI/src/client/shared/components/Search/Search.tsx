import { useState } from 'react';
import Image from 'next/image';

import { TextInput } from 'src/client/shared/components/TextInput';

import styles from './Search.module.css';

type SearchProps = {
    className?: string;
};

export const Search = ({ className }: SearchProps) => {
    const [value, setValue] = useState('');

    return (
        <div className={[styles['Search-Wrapper'], className].join(' ')}>
            <TextInput type="search" value={value} onChange={setValue} id="search" placeholder="Поиск" className={styles['Search']} />
            <div className={styles['Search-Icon']} role="button">
                <Image width={25} height={25} src="/icons/search.png" layout="fixed" />
            </div>
        </div>
    );
};
