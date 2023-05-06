import { useRouter } from 'next/router';

import { Button, ButtonType } from "src/client/shared/components/Button";

import { LIMIT } from './Pagination.constants';
import { usePaginationHooks } from "./Pagination.hooks";

import Next from 'public/icons/next.svg'
import Prev from 'public/icons/prev.svg'

import styles from './Pagination.module.css';

type PaginationProps = {
    count: number;
};

export const Pagination = ({ count }: PaginationProps) => {
    const router = useRouter();
    const currentPage = Number(router.query['page']) || 1;
    const showNext = Math.ceil(count / LIMIT) > currentPage;
    const showPrev = currentPage > 1;

    const { onNextClick, onPrevClick } = usePaginationHooks();

    return (
        <div className={styles['Pagination']}>
            {showPrev && (
                <Button
                    className={styles['Pagination-Button']}
                    onClick={onPrevClick}
                    icon={<Prev width={17} height={26} />}
                    view={ButtonType.Clear}
                />
            )}
            {showNext && (
                <Button
                    className={styles['Pagination-Button']}
                    onClick={onNextClick}
                    icon={<Next width={17} height={26} />}
                    view={ButtonType.Clear}
                />
            )}
        </div>
    );
};
