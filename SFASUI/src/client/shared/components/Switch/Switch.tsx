import { Switch as SwitchBase, SwitchProps } from 'antd';

import './Switch.css';

export const Switch = ({ ...rest }: SwitchProps) => {
    return <SwitchBase {...rest} />;
};
