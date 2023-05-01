import { Tag, TagProps, TagTypes } from "src/client/shared/components/Tag";

import styles from "./TagGroup.module.css";

export type TagGroupProps = {
    tagValues: string[];
    tagProps?: Partial<TagProps>;
    className?: string;
    maxDisplayed?: number;
    onChange?: (value: string) => void;
    chosenTag?: string[];
};

export const TagGroup = ({
    tagValues,
    tagProps,
    className,
    maxDisplayed,
    onChange,
    chosenTag,
}: TagGroupProps) => {
    const tagArray = maxDisplayed ? tagValues.slice(0, maxDisplayed) : tagValues;
    const hiddenTags = maxDisplayed ? tagValues.slice(maxDisplayed, tagValues.length) : [];

    return (
        <ul className={[className, styles['TagGroup']].join(' ')}>
            {tagArray.map((value) => (
                <li className={styles['TagGroup-Item']} key={value}>
                    <Tag
                        value={value}
                        onTagClick={onChange}
                        {...tagProps}
                        type={chosenTag?.includes(value) ? TagTypes.Active : tagProps?.type}
                    />
                </li>
            ))}
            {hiddenTags.length > 0 && (
                <li className={styles['TagGroup-Item']} title={hiddenTags.join(', ')} key="hidden">
                    <Tag value={`+${tagValues.length - tagArray.length}`} {...tagProps} />
                </li>
            )}
        </ul>
    );
};
