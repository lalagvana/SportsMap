import { useCallback, useMemo } from 'react';
import Image from 'next/image';

import { Toggle } from 'src/client/shared/components/Toggle';
import { NowrapText } from 'src/client/shared/components/NoWrapText';
import { Button, ButtonType } from 'src/client/shared/components/Button';

import { FiltersTab } from 'src/client/screens/Catalog/components/Filters/Filters.constants';
import { FieldType, FiltersState } from 'src/client/screens/Catalog/components/Filters/Filters.types';
import { isEmpty } from 'src/client/screens/Catalog/components/Filters/Filters.helpers';

import styles from './FiltersHeader.module.css';

const FILTERS_ITEMS = [
    { text: 'Тип объекта', name: FiltersTab.FacilityType },
    { text: 'Аудитория объекта', name: FiltersTab.Age },
    { text: 'Тип услуг', name: FiltersTab.PayingType },
    { text: 'Тип покрытия', name: FiltersTab.CoveringType },
    { text: 'Форма собственности', name: FiltersTab.Owner },
    { text: 'Размеры', name: FiltersTab.Size },
    { text: 'Другое', name: FiltersTab.Other },
];

type FiltersHeaderProps = {
    activeTab: FiltersTab | null;
    onTabClick: (tab: FiltersTab) => void;
    filtersState: FiltersState;
    onClearClick: () => void;
};

export const FiltersHeader = ({ onTabClick, filtersState, activeTab, onClearClick }: FiltersHeaderProps) => {
    const tabText = useCallback(
        (name: FiltersTab, text: string) => {
            const count = Object.values(filtersState[name]).filter((value) => isEmpty(value)).length;
            return count > 0 ? `${text} (${count})` : text;
        },
        [filtersState]
    );

    const hasClear = useMemo(
        () =>
            Object.keys(filtersState).filter(
                (key) => Object.values(filtersState[key]).filter((value) => isEmpty(value as FieldType)).length > 0
            ).length > 0,
        [filtersState]
    );

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
                    type={ButtonType.Clear}
                    className={styles['FiltersHeader-Clear']}
                    text="Сбросить"
                    onClick={onClearClick}
                    icon={<Image width={10} height={10} src="/icons/close.svg" layout="fixed" />}
                />
            )}
        </div>
    );
};