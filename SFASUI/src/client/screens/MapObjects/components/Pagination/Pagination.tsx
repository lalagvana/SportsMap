import { useRouter } from 'next/router';
import Image from 'next/image';

import { Button, ButtonType } from "src/client/shared/components/Button";

import { LIMIT } from './Pagination.constants';
import { usePaginationHooks } from "./Pagination.hooks";

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
                    icon={<Image width={17} height={26} src="/icons/prev.svg" layout="fixed" />}
                    view={ButtonType.Clear}
                />
            )}
            {showNext && (
                <Button
                    className={styles['Pagination-Button']}
                    onClick={onNextClick}
                    icon={<Image width={17} height={26} src="/icons/next.svg" layout="fixed" />}
                    view={ButtonType.Clear}
                />
            )}
        </div>
    );
};
