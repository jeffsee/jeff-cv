import React from 'react';

import { calculateDaysDifference } from './DateFunctions.js';

// Function to build ticks
export function generateTickForDate(tickDate, startDate, timelinePadding, timelineYPosition, tickLength, tickText, textXOffset, zoomFactor) {

    var startLocation = calculateDaysDifference(startDate, tickDate, zoomFactor);

    return (
        <g key={tickText}>
            <line x1={timelinePadding + startLocation} x2={timelinePadding + startLocation} y1={timelineYPosition} y2={timelineYPosition + tickLength} stroke="black"></line>
            <text x={timelinePadding + startLocation - textXOffset} y={timelineYPosition + tickLength + 15}>{tickText}</text>
        </g>
    )
}

export function generateTimelineEvent(event, startDate, timelinePadding, timelineYPosition, selectEvent, currentEventId, zoomFactor) {

    var startLocation = calculateDaysDifference(startDate, new Date(event.startDate), zoomFactor);
    var endLocation = calculateDaysDifference(startDate, new Date(event.endDate), zoomFactor);
    var eventWidth = calculateDaysDifference(new Date(event.startDate), new Date(event.endDate), zoomFactor);

    const eventHeight = 30;
    const eventDistanceFromY = 10;
    var textXOffset = 5;
    const textYOffset = 5;
    const priorityDistance = eventDistanceFromY + ((event.priority - 1) * eventHeight) + ((event.priority - 1) * 5);

    // Check to see if we need to show the end point as well
    let endPoint = null;
    let endLine = null;
    if (startLocation !== endLocation) {
        endPoint = <circle cx={timelinePadding + endLocation} cy={timelineYPosition} r="5" fill="red"></circle>;
        endLine = <line x1={timelinePadding + endLocation} x2={timelinePadding + endLocation} y1={timelineYPosition - 5} y2={timelineYPosition - priorityDistance} stroke="black" strokeDasharray="10, 10"></line>;
    }

    // Set the rectangle style - highlighted if the currently selected event id is the same as this event id
    var rectangleFillColour = "white";
    if (event.id === currentEventId) {
        rectangleFillColour = "yellow";
    }

    const rectangleStyle = { 
        strokeWidth: "1", 
        stroke: "black", 
        fill: rectangleFillColour 
    };

    // Display the icon if given
    let image = null;
    if (event.icon) {

        let imageSize = eventHeight - 3;
        let imageX = timelinePadding + startLocation + textXOffset;
        let imageY = timelineYPosition - priorityDistance - (eventHeight - 2);
        
        if (eventWidth < imageSize) {
            imageSize = eventWidth;
            imageX = timelinePadding + startLocation;
            imageY = timelineYPosition - priorityDistance - (imageSize * 1.5);
        }

        image = <image 
                    x={imageX} 
                    y={imageY}
                    width={imageSize} height={imageSize}
                    xlinkHref={event.icon}
                ></image>
        textXOffset = textXOffset + eventHeight;
    }

    // For single day events - resize to fit
    let calculatedEventWidth = event.shortHeading.length * 8;
    if (image !== null) {
        calculatedEventWidth = calculatedEventWidth + 35;
    }

    if (eventWidth < 1) {
        eventWidth = calculatedEventWidth;
    }

    return (
        <g key={event.id} onClick={() => selectEvent(event)}>
            <title>{event.heading}</title>
            <circle cx={timelinePadding + startLocation} cy={timelineYPosition} r="5" fill="red"></circle>
            <line x1={timelinePadding + startLocation} x2={timelinePadding + startLocation} y1={timelineYPosition - 5} y2={timelineYPosition - priorityDistance} stroke="black" strokeDasharray="10, 10"></line>
            <rect x={timelinePadding + startLocation} y={timelineYPosition - priorityDistance - eventHeight} width={eventWidth} height={eventHeight} style={rectangleStyle}></rect>
            {endPoint}
            {endLine}
            <text x={timelinePadding + startLocation + textXOffset} y={timelineYPosition - priorityDistance - (eventHeight / 2) + textYOffset}>{event.shortHeading}</text>
            {image}
        </g>
    )
}

// Converts the detail paragraphs in the events to html
export function BuildDetailParagraphs(detailParagraphs) {

    // eslint-disable-next-line
    var timelineText = detailParagraphs.map((d, i) => {
        if (d.type === "p") {
            return <p key={i} className="timelineParagraph">{d.text}</p>;
        }
        else if (d.type === "ul") {
            return <ul>
                {d.listItems.map((l, j) => <li key={j}>{l}</li>)}
            </ul>;
        }
    });

    return timelineText;
}