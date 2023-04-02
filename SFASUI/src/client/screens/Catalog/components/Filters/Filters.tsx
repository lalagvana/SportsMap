import { useCallback, useState } from 'react';

import { Divider } from 'src/client/shared/components/Divider';

import { FiltersState, InputFieldType } from './Filters.types';
import { EMPTY_STATE, FiltersTab, SIZE_INPUTS } from './Filters.constants';
import { CheckboxTab } from './components/CheckboxTab';
import { InputTab } from './components/InputTab';
import { FiltersHeader } from './components/FiltersHeader';

type FilterProps = {
    facilityTypes: string[];
    ageTypes: string[];
    payingTypes: string[];
    coverageTypes: string[];
    owningTypes: string[];
};

export const Filters = ({ facilityTypes, coverageTypes, payingTypes, owningTypes, ageTypes }: FilterProps) => {
    const [activeTab, setActiveTab] = useState<FiltersTab | null>(null);
    const [filtersState, setFiltersState] = useState<FiltersState>(EMPTY_STATE);

    const onTabClick = useCallback(
        (tab: FiltersTab) => (tab === activeTab ? setActiveTab(null) : setActiveTab(tab)),
        [activeTab, setActiveTab]
    );

    const onCheckboxClick = useCallback(
        (property: string, checked: boolean) => {
            if (activeTab) {
                setFiltersState({ ...filtersState, [activeTab]: { ...filtersState[activeTab], [property]: checked } });
            }
        },
        [filtersState, activeTab, setFiltersState]
    );

    const onInputChange = useCallback(
        (label: string, value: string, type: 'from' | 'to') => {
            if (activeTab) {
                setFiltersState({
                    ...filtersState,
                    [activeTab]: {
                        ...filtersState[activeTab],
                        [label]: { ...(filtersState[activeTab][label] as InputFieldType), [type]: value },
                    },
                });
            }
        },
        [filtersState, activeTab, setFiltersState]
    );

    const onClearClick = useCallback(() => {
        setFiltersState(EMPTY_STATE);
        setActiveTab(null);
    }, [setFiltersState, setActiveTab]);

    return (
        <div>
            <FiltersHeader
                onTabClick={onTabClick}
                filtersState={filtersState}
                activeTab={activeTab}
                onClearClick={onClearClick}
            />
            <Divider />
            {activeTab === FiltersTab.FacilityType && (
                <CheckboxTab
                    activeTab={FiltersTab.FacilityType}
                    items={facilityTypes}
                    onCheckboxClick={onCheckboxClick}
                    filtersState={filtersState}
                />
            )}
            {activeTab === FiltersTab.Age && (
                <CheckboxTab
                    activeTab={FiltersTab.Age}
                    items={ageTypes}
                    onCheckboxClick={onCheckboxClick}
                    filtersState={filtersState}
                />
            )}
            {activeTab === FiltersTab.CoveringType && (
                <CheckboxTab
                    activeTab={FiltersTab.CoveringType}
                    items={coverageTypes}
                    onCheckboxClick={onCheckboxClick}
                    filtersState={filtersState}
                />
            )}
            {activeTab === FiltersTab.PayingType && (
                <CheckboxTab
                    activeTab={FiltersTab.PayingType}
                    items={payingTypes}
                    onCheckboxClick={onCheckboxClick}
                    filtersState={filtersState}
                />
            )}

            {activeTab === FiltersTab.Owner && (
                <CheckboxTab
                    activeTab={FiltersTab.Owner}
                    items={owningTypes}
                    onCheckboxClick={onCheckboxClick}
                    filtersState={filtersState}
                />
            )}
            {activeTab === FiltersTab.Size && (
                <InputTab
                    activeTab={FiltersTab.Size}
                    filtersState={filtersState}
                    items={SIZE_INPUTS}
                    onInputChange={onInputChange}
                />
            )}
            {activeTab === FiltersTab.Other && (
                <InputTab
                    activeTab={FiltersTab.Other}
                    filtersState={filtersState}
                    items={SIZE_INPUTS}
                    onInputChange={onInputChange}
                />
            )}
            {activeTab && <Divider />}
        </div>
    );
};
