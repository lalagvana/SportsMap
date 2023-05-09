import { Drawer as DrawerBase, DrawerProps } from 'antd';

export const Drawer = ({ ...rest }: DrawerProps) => {
    return <DrawerBase {...rest} />;
};
