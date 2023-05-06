import ToggleIcon from 'public/icons/toggle.svg'

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
        <ToggleIcon width={10} height={10} />
    </div>
);
