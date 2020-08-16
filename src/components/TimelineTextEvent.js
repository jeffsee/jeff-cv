import React from 'react';

import './timelineStyles.css';

import { BuildDetailParagraphs } from '../common/TimelineFunctions.js';

function TimelineTextEvent(props) {

    // If no event passed in, provide the default slide (shouldn't get here)
    if (props.event === null || props.event === undefined) {
        // TODO
        return (
            <div className="timelineEvent"><h1 className="timelineHeading">No event.</h1></div>
        );
    }

    // Generate the paragraphs
    var timelineText = BuildDetailParagraphs(props.event.detailParagraphs);

    // If we have an icon - display it in the background
    let icon = null;
    if (props.event.backgroundImage) {
        icon = 
        <div className="timelineBackground">
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
        <div className="timelineEvent" style={eventStyle}>
            <p className="timelineDateHeader">{props.event.dateString}</p>
            <h1 className="timelineHeading">{props.event.heading}</h1>
            <h3 className="timelineSubheader">{props.event.subHeading}</h3>
            <div style={{clear: "both", position: "relative"}}>
                {timelineText}
            </div>
            {icon}
        </div>
    )

}

export default TimelineTextEvent;