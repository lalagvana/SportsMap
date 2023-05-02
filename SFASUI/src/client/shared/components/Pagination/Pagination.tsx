import { Pagination as PaginationBase, PaginationProps } from 'antd';

import './Pagination.css';

export const Pagination = ({ ...rest }: PaginationProps) => {
    return <PaginationBase {...rest} />;
};
