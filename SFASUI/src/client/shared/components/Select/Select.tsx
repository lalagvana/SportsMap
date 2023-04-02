import { Select as SelectBase, SelectProps as SelectBaseProps } from 'antd';

import styles from './Select.module.css';

type SelectProps = SelectBaseProps & {
    className?: string;
};

export const Select = ({ className, popupClassName, ...rest }: SelectProps) => {
    return (
        <SelectBase
            allowClear
            rootClassName={[styles['Select'], className].join(' ')}
            popupClassName={[styles['Select-Popup'], popupClassName].join(' ')}
            {...rest}
        />
    );
};
