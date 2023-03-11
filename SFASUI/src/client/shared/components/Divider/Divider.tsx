import styles from './Divider.module.css';

type DividerProps = {
    className?: string;
};

export const Divider = ({ className }: DividerProps) =>
  (<div className={[className, styles['Divider']].join(' ')} role="separator" />);
