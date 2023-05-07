import { useCallback, useMemo } from 'react';
import { NextRouter, useRouter } from 'next/router';
import { omit } from 'lodash';
import { mutate } from 'swr';

import { Toggle } from 'src/client/shared/components/Toggle';
import { NowrapText } from 'src/client/shared/components/NoWrapText';
import { Button, ButtonType } from 'src/client/shared/components/Button';
import { getArrayQuery } from 'src/client/shared/utils/query';
import { apiRoutes } from 'src/client/shared/utils/api/apiRoutes';

import {
    FiltersTab,
    OTHER_INPUTS_NAME,
    SIZE_INPUTS_NAME,
} from 'src/client/screens/Catalog/components/Filters/Filters.constants';
import { FILTERS_ITEMS } from './FiltersHeader.constans';

import Close from 'public/icons/close.svg';

import styles from './FiltersHeader.module.css';

type FiltersHeaderProps = {
    activeTab: FiltersTab | null;
    onTabClick: (tab: FiltersTab) => void;
};

const queryTabParams = ['type', 'age', 'paying_type', 'order_by', 'covering_type', 'owning_type'];

export const getCount = (name: FiltersTab, query: NextRouter['query']) => {
    if (name === FiltersTab.Size) {
        return Object.keys(query).filter((key) => SIZE_INPUTS_NAME.includes(key)).length;
    }

    if (name === FiltersTab.Other) {
        return Object.keys(query).filter((key) => OTHER_INPUTS_NAME.includes(key)).length;
    }

    return getArrayQuery(query[name]).length;
};

export const FiltersHeader = ({ onTabClick, activeTab }: FiltersHeaderProps) => {
    const { query, push } = useRouter();

    const tabText = useCallback(
        (name: FiltersTab, text: string) => {
            const count = getCount(name, query);
            return count > 0 ? `${text} (${count})` : text;
        },
        [query]
    );

    const onClearClick = useCallback(async () => {
        const newQuery = omit(query, [...queryTabParams, ...SIZE_INPUTS_NAME, ...OTHER_INPUTS_NAME]);

        await push({ query: newQuery });

        await mutate(`catalog${apiRoutes.facilitySearch}`);
    }, [query, push]);

    const hasClear = useMemo(() => {
        for (const queryParam of queryTabParams) {
            const arrayQuery = getArrayQuery(query[queryParam]);
            if (arrayQuery.length > 0) {
                return true;
            }
        }

        for (const inputQueryParam of [...OTHER_INPUTS_NAME, ...SIZE_INPUTS_NAME]) {
            if (query[inputQueryParam]) {
                return true;
            }
        }

        return false;
    }, [query]);

    return (
        <div className={styles['FiltersHeader']}>
            <ul className={styles['FiltersHeader-Tab']}>
                {FILTERS_ITEMS.map(({ name, text }) => (
                    <li
                        className={styles['FiltersHeader-Item']}
                        key={name}
                        onClick={() => onTabClick(name)}
                        role="button"
                    >
                        <NowrapText className={styles['FiltersHeader-ItemText']} text={tabText(name, text)} />
                        <Toggle isOpened={activeTab === name} />
                    </li>
                ))}
            </ul>
            {hasClear && (
                <Button
                    view={ButtonType.Clear}
                    className={styles['FiltersHeader-Clear']}
                    text="Сбросить"
                    onClick={onClearClick}
                    icon={<Close width={10} height={10} />}
                />
            )}
        </div>
    );
};
