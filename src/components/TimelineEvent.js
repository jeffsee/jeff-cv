import React from 'react';

import { calculateDaysDifference } from '../common/DateFunctions.js';
import { calculateTextWidth } from '../common/TimelineFunctions.js';
import '../common/TimelinePositions.js';

import './timelineStyles.css';

function TimelineEvent(props) {

    var endDate = new Date();
    if (props.event.endDate) {
        endDate = new Date(props.event.endDate);
    }

    var startLocation = calculateDaysDifference(props.startDate, new Date(props.event.startDate), props.zoomFactor);
    var endLocation = calculateDaysDifference(props.startDate, endDate, props.zoomFactor);
    var eventWidth = calculateDaysDifference(new Date(props.event.startDate), endDate, props.zoomFactor);
    var eventDistanceFromY = global.eventBaseDistanceFromY + ((props.event.priority - 1) * (global.eventHeight + global.eventBaseDistanceFromY));
    let eventTextXOffset = global.textXOffset;

    const bringEventToFront = (e) => {
        e.target.parentNode.parentNode.appendChild(e.target.parentNode);
    }

    // Generate the start details
    let startPoint = <circle
                        cx = {global.timelineXPosition + startLocation}
                        cy = {global.timelineYPosition}
                        r = {global.eventPointSize}
                        fill = "orange" />;
    let startLine = <line
                        x1 = {global.timelineXPosition + startLocation}
                        x2 = {global.timelineXPosition + startLocation}
                        y1 = {global.timelineYPosition - global.eventPointSize}
                        y2 = {global.timelineYPosition - eventDistanceFromY}
                        stroke="black"
                        strokeDasharray = "10, 10" />;

    // Calculate the end details (if needed)
    let endPoint = null;
    let endLine = null;
    if (startLocation !== endLocation) {
        endPoint = <circle
                        cx = {global.timelineXPosition + endLocation}
                        cy = {global.timelineYPosition}
                        r = {global.eventPointSize}
                        fill = "orange" />;
        endLine = <line
                        x1 = {global.timelineXPosition + endLocation}
                        x2 = {global.timelineXPosition + endLocation}
                        y1 = {global.timelineYPosition - global.eventPointSize}
                        y2 = {global.timelineYPosition - eventDistanceFromY}
                        stroke = "black" strokeDasharray="10, 10" />;
    }

    // Setup the icon if given
    let image = null;
    if (props.event.icon) {

        let imageSize = global.eventHeight - 3;
        let imageX = global.timelineXPosition + startLocation + global.textXOffset;
        let imageY = global.timelineYPosition - eventDistanceFromY - (global.eventHeight - 2);

        image = <image
                    x = {imageX}
                    y = {imageY}
                    width = {imageSize}
                    height = {imageSize}
                    xlinkHref = {props.event.icon} 
                    onMouseOver = {bringEventToFront} />

        eventTextXOffset = global.textXOffset + imageSize + 3;
    }

    // Resize the events to fit (if the date length is too short)
    let calculatedEventWidth = calculateTextWidth(props.event.shortHeading, "14px Quicksand");
    calculatedEventWidth = calculatedEventWidth + (global.textXOffset * 2);

    if (image !== null) {
        calculatedEventWidth = calculatedEventWidth + global.eventHeight;
    }

    if (eventWidth < calculatedEventWidth) {
        eventWidth = calculatedEventWidth;
    }

    // Highlight the currently selected event
    var eventFillColour = "white";
    if (props.event.id === props.currentEventId) {
        eventFillColour = "yellow";
    }

    // Set the event style
    const eventBoxStyle = {
        fill: eventFillColour
    }

    // Generate the event rectangle
    let eventRectangle = <rect
                            x = {global.timelineXPosition + startLocation}
                            y = {global.timelineYPosition - eventDistanceFromY - global.eventHeight}
                            width = {eventWidth}
                            height = {global.eventHeight}
                            className = "timelineEvent"
                            style = {eventBoxStyle}
                            onMouseOver = {bringEventToFront} />

    // Generate the event text
    let eventTextStyle = {
        pointerEvents: "none"
    }
    let eventText = <text
                        x = {global.timelineXPosition + startLocation + eventTextXOffset}
                        y = {global.timelineYPosition - eventDistanceFromY - (global.eventHeight / 2) + global.textYOffset}
                        style = {eventTextStyle}>
                        {props.event.shortHeading}
                    </text>;
    return (
        <g key = {props.event.id} onClick = {() => props.selectEvent(props.event)}>
            <title>{props.event.heading} {props.event.dateString}</title>
            {startPoint}
            {startLine}
            {eventRectangle}
            {image}
            {eventText}
            {endPoint}
            {endLine}
        </g>
    )
}

export default TimelineEvent;