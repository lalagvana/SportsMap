import { TagTypes } from "./Tag.types";

import styles from './Tag.module.css';

export type TagProps = {
    value: string;
    closable?: boolean;
    disabled?: boolean;
    onClose?: () => void;
    type: TagTypes;
};

export const Tag = ({ value, closable = false, disabled = false, onClose, type = TagTypes.Default }: Tag) => (
    <div className={[styles['Tag'], styles[`Tag_${type}`], disabled ? styles['Tag_disabled'] : ''].join(' ')}>
        <span className={[styles['Tag-Text'], styles[`Tag-Text_${type}`]].join(' ')}>{value}</span>
    </div>
);
