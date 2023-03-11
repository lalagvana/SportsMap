import { WorkingHoursType } from "src/client/shared/components/WorkingHours";

export type SidebarItemDetailsType = {
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
};
