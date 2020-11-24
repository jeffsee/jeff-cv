import React from 'react';

import './event.css';

import { BuildDetailParagraphs } from '../common/TimelineFunctions.js';

function EventText(props) {

    // If no event passed in, provide the default slide (shouldn't get here)
    if (props.event === null || props.event === undefined) {
        // TODO
        return (
            <div className="event"><h1 className="eventHeading">No event.</h1></div>
        );
    }

    // Generate the paragraphs
    var timelineText = BuildDetailParagraphs(props.event.detailParagraphs);

    // If we have a background, display it
    let icon = null;
    if (props.event.backgroundImage) {
        icon = 
        <div className="eventBackground">
            <img src={props.event.backgroundImage} alt="Icon" width="100%" height="100%"></img>
        </div>;
    }

    // Set the colors (default to black on white)
    let backColor = "#FFFFFF";
    if (props.event.backColor) {
        backColor = props.event.backColor;
    }

    let foreColor = "#000000";
    if (props.event.color) {
        foreColor = props.event.color;
    }

    const eventStyle = {
        backgroundColor: backColor,
        color: foreColor
    };

    return (
        <div className="event" style={eventStyle}>
            <p className="eventDateHeader">{props.event.dateString}</p>
            <h1 className="eventHeading">{props.event.heading}</h1>
            <h3 className="eventSubheader">{props.event.subHeading}</h3>
            <div style={{clear: "both", position: "relative"}}>
                {timelineText}
            </div>
            {icon}
        </div>
    )

}

export default EventText;