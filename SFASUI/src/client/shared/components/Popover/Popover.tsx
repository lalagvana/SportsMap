import { Popover as PopoverBase, PopoverProps } from 'antd';

export const Popover = ({ ...rest }: PopoverProps) => {
    return <PopoverBase {...rest} />;
};
