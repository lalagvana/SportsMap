import { Divider } from "../Divider/Divider";

import styles from './CardHeader.module.css';
import { NowrapText } from "../NoWrapText/NoWrapText";


type CardHeaderProps = {
    name: string;
    type: string;
    className?: string;
};

export const CardHeader = ({ name, type, className }: CardHeaderProps) => (
    <header className={[className, styles['CardHeader']].join(' ')}>
      <NowrapText className={styles['CardHeader-Type']} text={type} />
        <Divider />
      <NowrapText tagName="h2" className={styles['CardHeader-Name']} text={name} />
    </header>
);
