export enum FiltersTab {
    FacilityType = 'type',
    Owner = 'owning_type',
    PayingType = 'paying_type',
    CoveringType = 'covering_type',
    Age = 'age',
    Size = 'size',
    Other = 'other',
}

export const SIZE_INPUTS = [
    {
        label: 'Длина',
        units: 'м',
        name: 'length',
    },
    {
        label: 'Ширина',
        units: 'м',
        name: 'width',
    },
    {
        label: 'Высота',
        units: 'м',
        name: 'height',
    },
    {
        label: 'Глубина',
        units: 'м',
        name: 'depth',
    },
    {
        label: 'Площадь',
        units: 'м²',
        name: 'area',
    },
];

export const OTHER_INPUTS = [
    {
        label: 'ЕПС',
        units: 'чел',
        name: 'eps',
    },
    {
        label: 'Фактическая загруженность',
        units: 'чел/час',
        name: 'actual_workload',
    },
    {
        label: 'Годовая мощность',
        units: 'чел/год',
        name: 'annual_capacity',
    },
];

export const SIZE_INPUTS_NAME = ['length', 'width', 'height', 'area'].reduce(
    (prev, curr) => [...prev, `${curr}-from`, `${curr}-to`],
    []
);
export const OTHER_INPUTS_NAME = ['eps', 'actual_workload', 'annual_capacity'].reduce(
    (prev, curr) => [...prev, `${curr}-from`, `${curr}-to`],
    []
);
