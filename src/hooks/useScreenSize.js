import { useState, useEffect } from 'react';

const SIZE = 'screen and (max-width: 425px)';

export const useScreenSize = () => {
    const screen = window.matchMedia(SIZE);

    const [isMobile, setIsMobile] = useState(false);

    function validation({ matches }) {
        if (matches) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }
    // create an event listener
    useEffect(() => {
        screen.addEventListener('change', validation);
        setIsMobile(screen.matches);
        return () => {
            screen.removeEventListener('change', validation);
        }
    }, [screen])

    return { isMobile }
}