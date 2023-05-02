import React from 'react';
import { useRouter } from 'next/router';

import { Pagination } from 'src/client/shared/components/Pagination';

import { useOnPageChange } from './CatalogPagination.hooks';
import { LIMIT } from '../../Catalog.constants';

type CatalogPaginationProps = {
    total: number;
    className?: string;
};

export const CatalogPagination = ({ total, className }: CatalogPaginationProps) => {
    const { query } = useRouter();

    const onChange = useOnPageChange();

    return (
        <Pagination
            className={className}
            simple
            onChange={onChange}
            total={total}
            pageSize={LIMIT}
            current={Number(query['page']) || 1}
        />
    );
};
