import React from 'react';

import TimelineTextEvent from './TimelineTextEvent.js';
import TimelineImageEvent from './TimelineImageEvent.js';

import './timelineStyles.css';

const components = {
    text: TimelineTextEvent,
    image: TimelineImageEvent
}

function TimelineEvent(props) {

    // If no event passed in, provide the default slide
    if (props.event === null || props.event === undefined) {
        // TODO
        return (
            <div className="timelineEvent"><h1 className="timelineHeading">No event.</h1></div>
        );
    }

    // Determine the type of event component we're using, using text as the default
    var EventComponent;
    if (props.event.type) {
        EventComponent = components[props.event.type];
    }
    else {
        EventComponent = components["text"];
    }

    return (
        <EventComponent event={props.event} />
    );

}

export default TimelineEvent;