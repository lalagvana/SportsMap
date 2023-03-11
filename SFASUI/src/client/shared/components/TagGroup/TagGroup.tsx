import { Tag, TagProps } from 'src/client/shared/components/Tag';

import styles from './TagGroup.module.css';

type TagGroupProps = {
    tagValues: string[];
    tagProps?: Partial<TagProps>;
    className?: string;
    maxDisplayed?: number;
};

export const TagGroup = ({ tagValues, tagProps, className, maxDisplayed }: TagGroupProps) => {
    const tagArray = maxDisplayed ? tagValues.slice(0, maxDisplayed) : tagValues;
    const hiddenTags = maxDisplayed ? tagValues.slice(maxDisplayed, tagValues.length) : [];

    return (
        <ul className={[styles['TagGroup'], className].join(' ')}>
            {tagArray.map((value) => (
                <li className={styles['TagGroup-Item']}>
                    <Tag value={value} {...tagProps} />
                </li>
            ))}
            {hiddenTags.length > 0 && (
                <li className={styles['TagGroup-Item']} title={hiddenTags.join(', ')}>
                    <Tag value={`+${tagValues.length - tagArray.length}`} {...tagProps} />
                </li>
            )}
        </ul>
    );
};
