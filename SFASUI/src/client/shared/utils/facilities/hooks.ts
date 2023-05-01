import { capitalize } from 'lodash';
import { useMemo } from 'react';

import {
    useFacilityAges,
    useFacilityCoveringTypes,
    useFacilityOwningTypes,
    useFacilityPayingTypes,
    useFacilityTypes,
} from '../api/facilities';


export const useFacilityTypeSelectOptions = () => {
    const { data: facilityTypes } = useFacilityTypes();

    return useMemo(() => facilityTypes?.data?.map((value) => ({ value, label: capitalize(value) })), [facilityTypes]);
};

export const useCoveringTypeSelectOptions = () => {
    const { data: coveringTypes } = useFacilityCoveringTypes();

    return useMemo(() => coveringTypes?.data?.map((value) => ({ value, label: capitalize(value) })), [coveringTypes]);
};

export const useOwningTypeSelectOptions = () => {
    const { data: owningTypes } = useFacilityOwningTypes();

    return useMemo(() => owningTypes?.data?.map((value) => ({ value, label: capitalize(value) })), [owningTypes]);
};

export const usePayingTypeSelectOptions = () => {
    const { data: payingTypes } = useFacilityPayingTypes();
    return useMemo(() => payingTypes?.data?.map((value) => ({ value, label: capitalize(value) })), [payingTypes]);
};

export const useAgesSelectOptions = () => {
    const { data: ages } = useFacilityAges();
    return useMemo(() => ages?.data?.map((value) => ({ value, label: capitalize(value) })), [ages]);
};

export const usePayingTypeOptions = () => {
    const { data: payingTypes } = useFacilityPayingTypes();
    return payingTypes?.data;
};

export const useAgesOptions = () => {
    const { data: ages } = useFacilityAges();
    return ages?.data;
};
