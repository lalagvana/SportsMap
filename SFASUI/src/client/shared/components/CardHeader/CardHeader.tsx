import { Divider } from "src/client/shared/components/Divider";
import { NowrapText } from "src/client/shared/components/NoWrapText";

import styles from './CardHeader.module.css';


type CardHeaderProps = {
    name: string;
    type: string;
    className?: string;
    disabled?: boolean;
};

export const CardHeader = ({ name, type, className, disabled = false }: CardHeaderProps) => (
    <header className={[className, styles['CardHeader']].join(' ')}>
      <NowrapText className={[styles['CardHeader-Type'], disabled ? styles['CardHeader-Type_disabled'] : undefined].join(' ')} text={type} tagName="h2"/>
        <Divider />
      <NowrapText className={styles['CardHeader-Name']} text={name} />
    </header>
);
