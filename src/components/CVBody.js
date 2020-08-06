import React from 'react';

import CVHeader from './CVHeader.js';
import CVEra from './CVEra.js';
import CVDateDisplay from './CVDateDisplay.js';
import CVFooter from './CVFooter.js';

import { getEraForDate } from '../common/EraFunctions.js';

import './cvStyles.css';

// Used to display the CV details
function CVBody(props) {

    // If we're at the top, show the splash screen
    if (props.windowPosition === 0) {
        return (<CVHeader />);
    }

    // If we're at the bottom, show the footer
    if (props.viewingDate <= new Date(1983, 4, 1)) {
        return (<CVFooter />);
    }

    // Get the era to display
    const era = getEraForDate(props.viewingDate);

    // Fix for crashing when an era is not found - need to fix the get era for date for the edge cases
    if (era === undefined) {
        return (<div></div>);
    }
    
    return (
        <div>
            <CVDateDisplay date={props.viewingDate} />
            <CVEra era={era} date={props.viewingDate} />
        </div>
    )

}

export default CVBody;