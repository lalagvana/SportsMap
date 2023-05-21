import { Select as SelectBase, SelectProps as SelectBaseProps } from 'antd';

import styles from './Select.module.css';
import './Select.css';

export type SelectProps = SelectBaseProps & {
    className?: string;
    withUnselect?: boolean;
};

export const Select = ({ className, popupClassName, options, withUnselect = true, value, ...rest }: SelectProps) => {
    const selectOptions = options ? [...options] : [];

    if (withUnselect && options && value) {
        selectOptions.unshift({ label: 'Не выбрано', value: null });
    }

    return (
        <SelectBase
            rootClassName={[styles['Select'], className].join(' ')}
            popupClassName={[styles['Select-Popup'], popupClassName].join(' ')}
            options={selectOptions}
            value={value}
            {...rest}
        />
    );
};
