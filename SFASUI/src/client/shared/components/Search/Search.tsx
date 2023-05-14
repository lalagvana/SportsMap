import { useCallback, useState } from 'react';
import { debounce } from 'lodash';

import { TextInput } from 'src/client/shared/components/TextInput';

import SearchIcon from 'public/icons/search.svg';

import styles from './Search.module.css';

export type SearchProps = {
    className?: string;
    initialValue?: string;
    onSearch: (value: string) => void;
};

export const Search = ({ className, initialValue = '', onSearch }: SearchProps) => {
    const [value, setValue] = useState(initialValue);

    const debouncedOnSearch = debounce((value) => onSearch(value), 500);
    const onChange = useCallback(
        (event) => {
            setValue(event.target.value);

            debouncedOnSearch(event.target.value);
        },
        [setValue, debouncedOnSearch]
    );

    return (
        <div className={[styles['Search-Wrapper'], className].join(' ')}>
            <SearchIcon width={21} height={21} className={styles['Search-Icon']} />
            <TextInput value={value} onChange={onChange} id="search" placeholder="Поиск" className={styles['Search']} />
        </div>
    );
};
