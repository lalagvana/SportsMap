import { Divider } from "src/client/shared/components/Divider";
import { NowrapText } from "src/client/shared/NoWrapText/NoWrapText";

import styles from './CardHeader.module.css';


type CardHeaderProps = {
    name: string;
    type: string;
    className?: string;
};

export const CardHeader = ({ name, type, className }: CardHeaderProps) => (
    <header className={[className, styles['CardHeader']].join(' ')}>
      <NowrapText className={styles['CardHeader-Type']} text={type} tagName="h2"/>
        <Divider />
      <NowrapText className={styles['CardHeader-Name']} text={name} />
    </header>
);
