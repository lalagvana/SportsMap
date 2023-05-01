import { FiltersTab } from "../../Filters.constants";

export const FILTERS_ITEMS = [
  { text: 'Тип объекта', name: FiltersTab.FacilityType },
  { text: 'Аудитория объекта', name: FiltersTab.Age },
  { text: 'Тип услуг', name: FiltersTab.PayingType },
  { text: 'Тип покрытия', name: FiltersTab.CoveringType },
  { text: 'Форма собственности', name: FiltersTab.Owner },
  { text: 'Размеры', name: FiltersTab.Size },
  { text: 'Другое', name: FiltersTab.Other },
];