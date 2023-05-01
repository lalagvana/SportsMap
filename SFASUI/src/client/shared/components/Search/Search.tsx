import { useCallback, useState } from 'react';
import Image from 'next/image';

import { TextInput } from 'src/client/shared/components/TextInput';

import styles from './Search.module.css';

type SearchProps = {
    className?: string;
    initialValue?: string;
    onSearch: (value: string) => void;
};

export const Search = ({ className, initialValue = '', onSearch }: SearchProps) => {
    const [value, setValue] = useState(initialValue);
    const onChange = useCallback(
        (event) => {
            setValue(event.target.value);
        },
        [setValue]
    );

    return (
        <div className={[styles['Search-Wrapper'], className].join(' ')}>
            <TextInput value={value} onChange={onChange} id="search" placeholder="Поиск" className={styles['Search']} />
            <div className={styles['Search-Icon']} role="button" onClick={() => onSearch(value)}>
                <Image width={25} height={25} src="/icons/search.png" layout="fixed" />
            </div>
        </div>
    );
};
