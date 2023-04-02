import Image from 'next/image';

import styles from './Toggle.module.css';

type ToggleProps = {
    isOpened: boolean;
    onClick?: () => void;
    className?: string;
};

export const Toggle = ({ isOpened, onClick, className }: ToggleProps) => (
    <div
        role="button"
        onClick={onClick}
        className={[styles['Toggle'], isOpened ? styles['Toggle_opened'] : styles['Toggle_closed'], className].join(
            ' '
        )}
    >
        <Image width={10} height={10} src="/icons/toggle.png" layout="fixed" />
    </div>
);
