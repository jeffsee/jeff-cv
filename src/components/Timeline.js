import React, { useState, useEffect, useRef } from 'react';

import '../components/timelineStyles.css'
import TimelineProfile from './TimelineProfile.js';
import TimelineEvent from './TimelineEvent.js';
import { calculateDaysDifference, convertDateToMMMMyyyy, getAllYearsBetweenDates } from '../common/DateFunctions.js';
import { generateTickForDate, generateTimelineEvent } from '../common/TimelineFunctions.js';

import getEvents from '../data/events.js';

function Timeline(props) {

    // Set the state for the current event
    const [currentEvent, setCurrentEvent] = useState(null);

    // Set the state for the zoom factor
    const [zoomFactor, setZoomFactor] = useState(4);

    // Set the ref to the timeline
    const timelineRef = useRef(null);

    // Set the start date / end date from the props - default to today if no end date given
    var startDate = new Date(props.startDate);
    var endDate = new Date();
    if (props.endDate) {
        endDate = new Date(props.endDate);
    }

    // Scroll to where we need to be
    var scrollToDate = new Date(props.initialDate);
    if (currentEvent !== null) {
        scrollToDate = new Date(currentEvent.startDate);
    }
    
    var scrollToPosition = calculateDaysDifference(startDate, scrollToDate, zoomFactor);
    useEffect(() => {
        timelineRef.current.scrollTo(scrollToPosition, 0);
    });


    // The function to handle selecting a new event
    function selectEvent(event) {
        setCurrentEvent(event);
    }

    // Set the SVG variables
    const timelineYPosition = 130;
    const endTickLength = 40;
    const longTickLength = 20;
    const timelinePadding = 50;

    // Get the length of the timeline
    const daysLength = calculateDaysDifference(startDate, endDate, zoomFactor);
    const timelineLength = daysLength + (timelinePadding * 2);

    // Calculate the first and last ticks
    const firstTick = generateTickForDate(startDate, startDate, timelinePadding, timelineYPosition, endTickLength, convertDateToMMMMyyyy(startDate), 50, zoomFactor);
    const lastTick = generateTickForDate(endDate, startDate, timelinePadding, timelineYPosition, endTickLength, convertDateToMMMMyyyy(endDate), 50, zoomFactor);

    // Get the years for long ticks
    const longTickDates = getAllYearsBetweenDates(startDate, endDate);
    const longTicks = longTickDates.map(d => generateTickForDate(d, startDate, timelinePadding, timelineYPosition, longTickLength, d.getFullYear().toString(), 15, zoomFactor));

    // Generate the timeline events
    const timelineEvents = getEvents();
    var currentEventId = "";
    if (currentEvent) {
        currentEventId = currentEvent.id;
    }
    const events = timelineEvents.sort(e => e.priority).map(e => generateTimelineEvent(e, startDate, timelinePadding, timelineYPosition, selectEvent, currentEventId, zoomFactor));

    return (
        <div className="timeline">
            
            <TimelineProfile event={currentEvent} />
            <TimelineEvent event={currentEvent} />

            <div className="timelineDate" ref={timelineRef}>
                <svg width={timelineLength} height="200" >
                    {/* The timeline itself */}
                    <line x1={timelinePadding} y1={timelineYPosition} x2={daysLength + timelinePadding} y2={timelineYPosition} stroke="black"></line>
                    {firstTick}
                    {longTicks}
                    {lastTick}
                    {events}
                </svg>
            </div>

        </div>
    );

}

export default Timeline;