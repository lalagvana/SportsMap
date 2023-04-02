import { FiltersState } from './Filters.types';

export enum FiltersTab {
    FacilityType = 'facility-type',
    Owner = 'owner',
    PayingType = 'paying-type',
    CoveringType = 'covering-type',
    Age = 'age',
    Size = 'size',
    Other = 'other',
}

export const EMPTY_STATE: FiltersState = {
    [FiltersTab.FacilityType]: {},
    [FiltersTab.Owner]: {},
    [FiltersTab.PayingType]: {},
    [FiltersTab.CoveringType]: {},
    [FiltersTab.Age]: {},
    [FiltersTab.Size]: {},
    [FiltersTab.Other]: {},
};

// TODO вставить актуальные данные
export const SIZE_INPUTS = [
    {
        label: 'ЕПС',
        units: 'чел/час',
    },
    {
        label: 'Не ЕПС',
        units: 'чел/час',
    },
];
