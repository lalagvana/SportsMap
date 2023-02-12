import { useAnimation, useCycle } from 'framer-motion';
import { useState } from 'react';

//Below logic is for toggling the navbar when toggleNavbar is called. It is used on mobile toggling of navbar.
export function useAnimatedNavToggler() {
    const [showNavLinks, setShowNavLinks] = useState(false);
    const [x, cycleX] = useCycle('0%', '150%');
    const animation = useAnimation();

    const toggleNavbar = () => {
        setShowNavLinks(!showNavLinks);
        animation.start({ x, display: 'block' });
        cycleX();
    };

    return { showNavLinks, animation, toggleNavbar };
}
