import React from 'react';

import './event.css';

import { BuildDetailParagraphs, BuildSkillList } from '../common/TimelineFunctions.js';

function EventPosition(props) {

    // If no event passed in, provide the default slide (shouldn't get here)
    if (props.event === null || props.event === undefined) {
        // TODO
        return (
            <div className="event"><h1 className="eventHeading">No event.</h1></div>
        );
    }

    // Generate the paragraphs
    var timelineText = BuildDetailParagraphs(props.event.detailParagraphs);

    // Generate the skills
    var skillText = BuildSkillList(props.event.skills);

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
            <div className="eventSplitTop">
                <p className="eventDateHeader">{props.event.dateString}</p>
                <h1 className="eventHeading">{props.event.heading}</h1>
                <h3 className="eventSubheader">{props.event.subHeading}</h3>
            </div>
            <div className="eventSplitBottom">
                <div className="eventSplitLeft">
                    <h4>Job Description</h4>
                    <div>
                        {timelineText}
                    </div>
                </div>
                <div className="eventSplitRight">
                    <h4>Key Technologies, Skills and Tools</h4>
                    <div>
                        {skillText}
                    </div>
                </div>
            </div>
            {icon}
        </div>
    )

}

export default EventPosition;