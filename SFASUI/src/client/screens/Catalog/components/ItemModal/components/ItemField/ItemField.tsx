import styles from './ItemField.module.css'

type ItemFieldProps = {
    label: string;
    value: string | number;
    units?: string;
    className?: string;
};

export const ItemField = ({ label, value, units, className }: ItemFieldProps) => (
    <dl className={[styles['ItemField'], className].join(' ')}>
        <dt className={styles['ItemField-Label']}>{label}</dt>
        <dd className={styles['ItemField-Value']}>{value} {units}</dd>
    </dl>
);
