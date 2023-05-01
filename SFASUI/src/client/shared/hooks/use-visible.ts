import { useCallback, useState } from 'react';

type UseVisibleProps = {
    initialVisible?: boolean;
    onClose?: () => void;
    onOpen?: () => void;
};

export const useVisible = ({ initialVisible = false, onClose, onOpen }: UseVisibleProps) => {
    const [isVisible, setIsVisible] = useState(initialVisible);

    const open = useCallback(() => {
        setIsVisible(true);
        if (onOpen) {
            onOpen();
        }
    }, [onOpen, setIsVisible]);

    const hide = useCallback(() => {
        setIsVisible(false);
        if (onClose) {
            onClose();
        }
    }, [onClose, setIsVisible]);

    return { open, hide, isVisible };
};
