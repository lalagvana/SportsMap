import { WorkingHoursType } from '../../shared/components/WorkingHours';

export type CatalogItem = {
    id: number;
    name: string;
    type: string;
    phone?: string;
    link?: string;
    workingHours: WorkingHoursType;
    age: string[];
    payingType: string[];
    owner: string;
    address: string;
    availability?: boolean;
    photos?: string[];
    area: number;
    width?: number;
    height?: number;
    length?: number;
    depth?: number;
    coveringType: string;
    owningType: string;
    notes?: string;
    eps?: number;
    actual_workload?: number;
    annual_capacity?: number;
};
