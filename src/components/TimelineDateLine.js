import React from 'react';
import '../common/TimelinePositions.js';

import './timelineStyles.css';

function TimelineDateLine(props) {

    return (<line 
        x1={global.timelineXPosition} 
        y1={global.timelineYPosition} 
        x2={props.daysLength + global.timelineXPosition} 
        y2={global.timelineYPosition} 
        stroke="black">
    </line>);

}

export default TimelineDateLine;