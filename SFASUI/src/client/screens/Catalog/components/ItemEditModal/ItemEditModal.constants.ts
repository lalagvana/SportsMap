import { FacilityType } from 'src/client/shared/types/facilities';

export const INITIAL_VALUES = {
    phone_number: '',
    site: '',
    area: undefined,
    width: undefined,
    height: undefined,
    length: undefined,
    depth: undefined,
    hidden: false,
    covering_type: undefined,
    owning_type: undefined,
    note: '',
    eps: undefined,
    actual_workload: undefined,
    annual_capacity: undefined,
    photo: [],
    x: undefined,
    y: undefined,
    address: '',
    age: [],
    accessibility: false,
    name: '',
    paying_type: [],
    type: undefined,
    owner: '',
    working_hours: {
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
    },
} as unknown as FacilityType;
