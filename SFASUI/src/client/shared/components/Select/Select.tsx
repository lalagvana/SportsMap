import { Select as SelectBase, SelectProps as SelectBaseProps } from 'antd';

import styles from './Select.module.css';
import './Select.css';

export type SelectProps = SelectBaseProps & {
    className?: string;
};

export const Select = ({ className, popupClassName, ...rest }: SelectProps) => {
    return (
        <SelectBase
            rootClassName={[styles['Select'], className].join(' ')}
            popupClassName={[styles['Select-Popup'], popupClassName].join(' ')}
            {...rest}
        />
    );
};
