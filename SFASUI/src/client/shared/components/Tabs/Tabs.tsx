import { Tabs as TabsBase, TabsProps } from 'antd';

import './Tabs.css';

export const Tabs = (props: TabsProps) => {
    return <TabsBase type="card" centered tabBarGutter={16} {...props} />;
};
