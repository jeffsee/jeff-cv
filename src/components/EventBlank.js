import React from 'react';

import './event.css';

function EventBlank(props) {

    // Set the colors (default to black on white)
    let backColor = "#FFFFFF";
    let foreColor = "#000000";

    const eventStyle = {
        backgroundColor: backColor,
        color: foreColor
    };

    return (
        <div className="event" style={eventStyle}>
            No event
        </div>
    )

}

export default EventBlank;