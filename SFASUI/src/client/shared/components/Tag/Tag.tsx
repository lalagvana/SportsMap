import { useCallback } from 'react';
import { capitalize } from "lodash";

import { TagTypes } from './Tag.types';

import styles from './Tag.module.css';

export type TagProps = {
    value: string;
    closable?: boolean;
    disabled?: boolean;
    onClose?: () => void;
    onTagClick?: (value: string) => void;
    type?: TagTypes;
    className?: string;
};

export const Tag = ({ className, value, onTagClick, disabled = false, type = TagTypes.Default }: TagProps) => {
    const handleClick = useCallback(() => {
        if (onTagClick) {
            onTagClick(value);
        }
    }, [onTagClick, value]);

    return (
        <div
            className={[
                className,
                styles['Tag'],
                styles[`Tag_${type}`],
                disabled ? styles['Tag_disabled'] : '',
                onTagClick ? styles['Tag_clickable'] : '',
            ].join(' ')}
            role="button"
            onClick={handleClick}
        >
            <span className={[styles['Tag-Text'], styles[`Tag-Text_${type}`]].join(' ')}>{capitalize(value)}</span>
        </div>
    );
};
