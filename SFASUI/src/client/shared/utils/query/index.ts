export const getArrayQuery = (queryValue: string | string[] | undefined): string[] => {
    if (!queryValue) {
        return [];
    }

    if (Array.isArray(queryValue)) {
        return queryValue;
    }

    return [queryValue];
};