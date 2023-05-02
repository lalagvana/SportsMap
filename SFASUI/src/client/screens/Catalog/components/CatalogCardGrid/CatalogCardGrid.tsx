import { FacilityType } from 'src/client/shared/types/facilities';

import { CatalogCard } from '../CatalogCard';

import styles from './CatalogCardGrid.module.css'

type CatalogCardGridProps = {
    items: FacilityType[];
};

export const CatalogCardGrid = ({ items }: CatalogCardGridProps) => {
    return (
        <ul className={styles['CatalogCardGrid']}>
            {items.map((item) => (
                <li className={styles['CatalogCardGrid-Item']} key={item.id}>
                    <CatalogCard  item={item} disabled={item.hidden} />
                </li>
            ))}
        </ul>
    );
};
