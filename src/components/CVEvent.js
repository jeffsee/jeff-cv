import React from 'react';

import { calculateDaysDifference, timelineStartDate } from '../common/DateFunctions.js';

class CVEvent extends React.Component {

    render() {

        // Calculate the dates
        var startDate = new Date(this.props.event.startDate);
        var endDate;
        if (this.props.event.endDate == null) {
            endDate = Date.now();
        }
        else {
            endDate = new Date(this.props.event.endDate);
        }

        // Figure out the height
        var eventHeight = calculateDaysDifference(startDate, endDate);
        if (eventHeight < 50) {
            eventHeight = 50;
        }

        // Figure out where to put it
        var topLocation = calculateDaysDifference(startDate, timelineStartDate);
        if (topLocation < 0) {
            topLocation = 0;
        }

        // Set the style for the internal div
        const eventStyle = {
            border: "1px solid black",
            position: "relative",
            top: topLocation + "px",
            height: eventHeight + "px",
            width: "90%"
        };

        console.log(eventStyle);

        return (

            <div style={eventStyle}>
                Event: { this.props.event.heading } 
            </div>
        )
    }

}

export default CVEvent;