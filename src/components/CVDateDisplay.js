import React from 'react';

import { convertDateToMMMMyyyy } from '../common/DateFunctions.js';

import './cvStyles.css';

// Used to display the date
function CVDateDisplay(props) {

    const dateToDisplay = convertDateToMMMMyyyy(props.date);

    return (
        <div className="dateDisplay">
            <span className="dataText">{dateToDisplay}</span>
        </div>
    );
}

export default CVDateDisplay;