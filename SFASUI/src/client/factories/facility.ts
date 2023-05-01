import { FacilityType, WorkingHoursType } from 'src/client/shared/types/facilities';

export const createWorkingHours = (props?: Partial<WorkingHoursType>): WorkingHoursType => ({
    monday: {
        open: false,
    },
    tuesday: {
        open: false,
    },
    wednesday: {
        open: false,
    },
    thursday: {
        open: false,
    },
    friday: {
        open: false,
    },
    saturday: {
        open: false,
    },
    sunday: {
        open: false,
    },
    ...props,
});

export const createFacilityObject = (props?: Partial<FacilityType>): FacilityType => ({
    id: '1',
    photo: [],
    hidden: false,
    x: 0,
    y: 0,
    address: 'Выборгская набережная, д. 1, корпус 1000-7',
    age: ['Дети', 'Молодежь', 'Взрослые', 'Пенсионеры'],
    accessibility: true,
    name: 'Спортивный зал',
    paying_type: ['Бесплатные'],
    type: 'Зал гимнастики',
    owner: 'Спбгу',
    area: 100,
    width: 100,
    length: 100,
    height: 100,
    depth: 100,
    covering_type: 'трава',
    annual_capacity: 10,
    actual_workload: 10,
    owning_type: 'РФ',
    eps: 1,
    note: 'hi',
    working_hours: createWorkingHours(),
    ...props,
});
