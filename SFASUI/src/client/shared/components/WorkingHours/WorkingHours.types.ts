type Weekday = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
type OpenHours = {
    open: boolean;
    from: number;
    to: number;
};

export type WorkingHoursType = Record<Weekday, OpenHours>;
