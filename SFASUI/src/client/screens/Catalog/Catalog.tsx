import React from 'react';

import { useFacilitySearch } from 'src/client/shared/utils/api/facilities';
import { appLayoutRenderer } from 'src/client/shared/layouts/AppLayout/AppLayout';

import { Filters } from './components/Filters';
import { useSearchQuery } from './Catalog.hooks';
import { CatalogCardGrid } from './components/CatalogCardGrid';
import { LIMIT } from './Catalog.constants';
import { CatalogPagination } from './components/CatalogPagination';

import styles from './Catalog.module.css';

export const Catalog = () => {
    const searchQuery = useSearchQuery();

    const { data: facilityObjects } = useFacilitySearch(searchQuery, {
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        revalidateOnMount: false,
    });

    return (
        <main className={styles['Catalog-Main']}>
            <Filters className={styles['Catalog-Filters']} />
            <section className={styles['Catalog-Found']}>
                <span className={styles['Catalog-Found_text']}>Найдено объектов: </span>
                <output className={styles['Catalog-Found_count']}>{facilityObjects?.count || 0}</output>
            </section>
            {facilityObjects?.facilities && <CatalogCardGrid items={facilityObjects?.facilities} />}
            {facilityObjects?.count && facilityObjects?.count > LIMIT && (
                <CatalogPagination className={styles['Catalog-Pagination']} total={facilityObjects?.count} />
            )}
        </main>
    );
};

export const catalogLayoutRenderer = appLayoutRenderer(styles['Catalog']);



