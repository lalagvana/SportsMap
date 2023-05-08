import { capitalize } from "lodash";

import { Divider } from "src/client/shared/components/Divider";
import { NowrapText } from "src/client/shared/components/NoWrapText";

import styles from './CardHeader.module.css';


type CardHeaderProps = {
    name: string;
    type: string;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
};

export const CardHeader = ({ name, type, className, disabled = false, onClick }: CardHeaderProps) => (
    <header className={[className, styles['CardHeader']].join(' ')} onClick={onClick}>
      <NowrapText className={[styles['CardHeader-Type'], disabled ? styles['CardHeader-Type_disabled'] : undefined].join(' ')} text={name} tagName="h2"/>
        <Divider />
      <NowrapText className={styles['CardHeader-Name']} text={capitalize(type)} />
    </header>
);
