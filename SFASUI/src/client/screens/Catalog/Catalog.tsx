import React from 'react';
import { useRouter } from 'next/router';

import { SearchFacilities, useFacilitySearch } from 'src/client/shared/utils/api/facilities';
import { appLayoutRenderer } from 'src/client/shared/layouts/AppLayout/AppLayout';
import { Loading } from "src/client/shared/components/Loading/Loading";

import { Filters } from './components/Filters';
import { getSearchQuery } from './Catalog.helpers';
import { CatalogCardGrid } from './components/CatalogCardGrid';
import { LIMIT } from './Catalog.constants';
import { CatalogPagination } from './components/CatalogPagination';

import styles from './Catalog.module.css';

export type CatalogPageProps = {
    facilityObjects?: SearchFacilities.Response;
};

export const Catalog = ({ facilityObjects: initialFacilityObjects }: CatalogPageProps) => {
    const { query } = useRouter();

    const searchQuery = getSearchQuery(query);

    const { data: facilityObjects, isValidating } = useFacilitySearch(searchQuery, {
        fallbackData: initialFacilityObjects,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        revalidateOnMount: true,
    });

    return (
        <main className={styles['Catalog-Main']}>
            <Filters className={styles['Catalog-Filters']} />
            <section className={styles['Catalog-Found']}>
                <span className={styles['Catalog-Found_text']}>Найдено объектов: </span>
                <output className={styles['Catalog-Found_count']}>{facilityObjects?.count || 0}</output>
            </section>
            {isValidating && <Loading />}
            {!isValidating && facilityObjects?.facilities && <CatalogCardGrid items={facilityObjects?.facilities} />}
            {!isValidating && facilityObjects?.count && facilityObjects?.count > LIMIT && (
                <CatalogPagination className={styles['Catalog-Pagination']} total={facilityObjects?.count} />
            )}
        </main>
    );
};

export const catalogLayoutRenderer = appLayoutRenderer(styles['Catalog']);
