import { Divider } from "../Divider/Divider";

import styles from './CardHeader.module.css';


type CardHeaderProps = {
    name: string;
    type: string;
    className?: string;
};

export const CardHeader = ({ name, type, className }: CardHeaderProps) => (
    <header className={[className, styles['CardHeader']].join(' ')}>
        <h2 className={styles['CardHeader-Name']}>{name}</h2>
        <Divider />
        <span className={styles['CardHeader-Type']}>{type}</span>
    </header>
);
