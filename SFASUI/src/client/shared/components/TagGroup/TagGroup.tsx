import { Tag, TagProps } from '../Tag';

import styles from './TagGroup.module.css';

type TagGroupProps = {
    tagValues: string[];
    tagProps?: Partial<TagProps>;
    className?: string;
};

export const TagGroup = ({ tagValues, tagProps, className }: TagGroupProps) => (
    <ul className={[styles['TagGroup'], className].join(' ')}>
        {tagValues.map((value) => (
            <li className={styles['TagGroup-Item']}>
                <Tag value={value} {...tagProps} />
            </li>
        ))}
    </ul>
);
