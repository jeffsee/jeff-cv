import React from 'react';

import { calculateDaysDifference } from '../common/DateFunctions.js';
import '../common/TimelinePositions.js';

import './timelineStyles.css';

function TimelineTick(props) {

    var startLocation = calculateDaysDifference(props.startDate, props.tickDate, props.zoomFactor);

    return (
        <g key={props.tickText}>
            <line 
                x1={global.timelineXPosition + startLocation} 
                x2={global.timelineXPosition + startLocation} 
                y1={global.timelineYPosition} 
                y2={global.timelineYPosition + props.tickLength} 
                stroke="black">
            </line>
            <text 
                x={global.timelineXPosition + startLocation - props.textXOffset} 
                y={global.timelineYPosition + props.tickLength + 15}>
                {props.tickText}
            </text>
        </g>
    )
}

export default TimelineTick;