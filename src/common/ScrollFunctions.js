import { useState, useEffect } from 'react';

import { pixelsPerDay } from './EraFunctions.js';

export function useScrollListener() {

    const [windowPosition, setWindowPosition] = useState(0);
    const [viewingDate, setViewingDate] = useState(new Date());

    // Handle the window scrolling
    function handleScroll() {
        const currentLocation = window.pageYOffset;
        setWindowPosition(currentLocation);
        var viewDate = new Date();
        viewDate.setHours(0, 0, 0, 0);
        viewDate.setDate(viewDate.getDate() - ((currentLocation - 1) / pixelsPerDay));
        setViewingDate(viewDate);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return { windowPosition, viewingDate };

}