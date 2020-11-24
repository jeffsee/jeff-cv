import React from 'react';

import EventText from './EventText.js';
import EventImage from './EventImage.js';
import EventPosition from './EventPosition.js';
import EventBlank from './EventBlank.js';

import './event.css';

const components = {
    text: EventText,
    image: EventImage,
    position: EventPosition
}

function Event(props) {

    // If no event passed in, provide the default slide
    if (props.event === null || props.event === undefined) {
        // TODO
        return (
            <EventBlank />
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

export default Event;