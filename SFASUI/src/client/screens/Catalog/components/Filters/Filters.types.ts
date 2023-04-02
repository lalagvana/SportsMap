import { FiltersTab } from './Filters.constants';

export type InputFieldType = { from: number; to: number }
export type FieldType = boolean | InputFieldType
export type FiltersState = Record<FiltersTab, { [name: string]: FieldType }>;
