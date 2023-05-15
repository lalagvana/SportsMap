import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { SearchFacilities, useFacilitySearch } from 'src/client/shared/utils/api/facilities';
import { appLayoutRenderer } from 'src/client/shared/layouts/AppLayout/AppLayout';
import { Loading } from 'src/client/shared/components/Loading/Loading';

import { Filters } from './components/Filters';
import { getSearchQuery } from './Catalog.helpers';
import { CatalogCardGrid } from './components/CatalogCardGrid';
import { LIMIT } from './Catalog.constants';
import { CatalogPagination } from './components/CatalogPagination';

import NoSearchResults from 'public/images/NoSearchResults.svg';

import styles from './Catalog.module.css';

export type CatalogPageProps = {
    facilityObjects?: SearchFacilities.Response;
};

export const Catalog = ({ facilityObjects: initialFacilityObjects }: CatalogPageProps) => {
    const { query } = useRouter();

    const searchQuery = getSearchQuery(query);

    const { data: facilityObjects, isValidating } = useFacilitySearch(
        searchQuery,
        {
            fallbackData: initialFacilityObjects,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
            revalidateOnMount: true,
        },
        'catalog'
    );

    const showObjects = facilityObjects?.facilities && facilityObjects.facilities.length > 0;
    const showPagination = showObjects && facilityObjects?.count && facilityObjects?.count > LIMIT;

    return (
        <>
            <Head>
                <title>Каталог</title>
                <meta name="title" content="Каталог" />
            </Head>
            <main className={styles['Catalog-Main']}>
                <Filters className={styles['Catalog-Filters']} />
                <section className={styles['Catalog-Found']}>
                    <span className={styles['Catalog-Found_text']}>Найдено объектов: </span>
                    <output className={styles['Catalog-Found_count']}>{facilityObjects?.count || 0}</output>
                </section>
                {isValidating && <Loading />}
                {!isValidating && showObjects && <CatalogCardGrid items={facilityObjects?.facilities} />}
                {!isValidating && showPagination && (
                    <CatalogPagination className={styles['Catalog-Pagination']} total={facilityObjects.count || 0} />
                )}
                {!isValidating && !showObjects && (
                    <div className={styles['Catalog-NoResults']}>
                        <NoSearchResults width={150} height={150} />
                        <p className={styles['Catalog-NoResultsText']}>
                            К сожалению, по вашему запросу ничего не найдено
                        </p>
                        <p className={styles['Catalog-NoResultsCaption']}>
                            Попробуйте поменять фильтры
                        </p>
                    </div>
                )}
            </main>
        </>
    );
};

export const catalogLayoutRenderer = appLayoutRenderer(styles['Catalog']);
