import { useMemo, useCallback, CSSProperties } from 'react';
import { createPortal } from 'react-dom';

import styles from './PortalPopup.module.css';

type PortalPopupProps = {
    children: JSX.Element | JSX.Element[];
    overlayColor: string;
    placement?: string;
    onOutsideClick?: () => void;
    zIndex?: number;
};

export const PortalPopup = ({
    children,
    overlayColor,
    placement = 'Centered',
    onOutsideClick,
    zIndex = 100,
}: PortalPopupProps) => {
    const popupStyle = useMemo(() => {
        const style: CSSProperties = { zIndex };

        if (overlayColor) {
            style.backgroundColor = overlayColor;
        }

        switch (placement) {
            case 'Centered':
                style.alignItems = 'center';
                style.justifyContent = 'center';
                break;
            case 'Top left':
                style.alignItems = 'flex-start';
                break;
            case 'Top center':
                style.alignItems = 'center';
                break;
            case 'Top right':
                style.alignItems = 'flex-end';
                break;
            case 'Bottom left':
                style.alignItems = 'flex-start';
                style.justifyContent = 'flex-end';
                break;
            case 'Bottom center':
                style.alignItems = 'center';
                style.justifyContent = 'flex-end';
                break;
            case 'Bottom right':
                style.alignItems = 'flex-end';
                style.justifyContent = 'flex-end';
                break;
        }

        return style;
    }, [placement, overlayColor, zIndex]);

    const onOverlayClick = useCallback(
        (e) => {
            if (
                onOutsideClick &&
                e.target.classList.contains(styles.portalPopupOverlay)
            ) {
                onOutsideClick();
            }
            e.stopPropagation();
        },
        [onOutsideClick]
    );

    return (
        <Portal>
            <div
                className={styles.portalPopupOverlay}
                style={popupStyle}
                onClick={onOverlayClick}
            >
                {children}
            </div>
        </Portal>
    );
};

type PortalProps = {
    children: JSX.Element | JSX.Element[];
    containerId?: string;
};

export const Portal = ({ children, containerId = 'portals' }: PortalProps) => {
    let portalsDiv = document.getElementById(containerId);
    if (!portalsDiv) {
        portalsDiv = document.createElement('div');
        portalsDiv.setAttribute('id', containerId);
        document.body.appendChild(portalsDiv);
    }

    return createPortal(children, portalsDiv);
};
