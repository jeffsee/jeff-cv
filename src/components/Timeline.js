import React, { useState, useEffect, useRef } from 'react';

import '../components/timelineStyles.css'

import Event from './Event.js';
import TimelineDateLine from './TimelineDateLine.js';
import TimelineTick from './TimelineTick.js';
import TimelineEvent from './TimelineEvent.js';

import { calculateDaysDifference, convertDateToMMMMyyyy, getAllYearsBetweenDates } from '../common/DateFunctions.js';

import '../common/TimelinePositions.js';
import getEvents from '../data/events.js';

function Timeline(props) {

    // Set the state for the current event
    const [currentEvent, setCurrentEvent] = useState(null);

    // Set the state for the zoom factor
    const [zoomFactor, setZoomFactor] = useState(3);

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


    // The function to handle selecting (or deselecting) an event
    function selectEvent(event) {
        if (event.id === currentEventId) {
            setCurrentEvent(null);
        }
        else {
            setCurrentEvent(event);
        }
    }

    // Get the length of the timeline
    const daysLength = calculateDaysDifference(startDate, endDate, zoomFactor);
    const timelineLength = daysLength + (global.timelineXPosition * 2);

    // Get the years for long ticks
    const longTickDates = getAllYearsBetweenDates(startDate, endDate);
    const longTicks = longTickDates.map(d => <TimelineTick key={d} startDate={startDate} tickDate={d} tickLength={global.longTickLength} tickText={d.getFullYear().toString()} textXOffset={15} zoomFactor={zoomFactor} />);

    // Generate the timeline events
    const timelineEvents = getEvents();
    var currentEventId = "";
    if (currentEvent) {
        currentEventId = currentEvent.id;
    }
    
    const events = timelineEvents.sort(e => e.priority).map(e => <TimelineEvent key={e.id} event={e} startDate={startDate} selectEvent={selectEvent} currentEventId={currentEventId} zoomFactor={zoomFactor} />);

    return (
        <div className="timeline">
            <Event event={currentEvent} />

            <div className="timelineDate" ref={timelineRef}>
                <svg width={timelineLength} height="200" >
                    {/* The timeline itself */}
                    <TimelineDateLine daysLength={daysLength} />
                    {/* The starting tick */}
                    <TimelineTick startDate={startDate} tickDate={startDate} tickLength={global.endTickLength} tickText={convertDateToMMMMyyyy(startDate)} textXOffset={30} zoomFactor={zoomFactor} />
                    {/* The ending tick */}
                    <TimelineTick startDate={startDate} tickDate={endDate} tickLength={global.endTickLength} tickText={convertDateToMMMMyyyy(endDate)} textXOffset={60} zoomFactor={zoomFactor} />
                    {/* The long ticks */}
                    {longTicks}
                    {/* The events */}
                    {events}
                </svg>
            </div>

        </div>
    );

}

export default Timeline;