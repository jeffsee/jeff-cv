import React from 'react';

import './cvStyles.css';

import { getDivHeightForEra } from '../common/EraFunctions.js';

// Used to display the background image / color and watermark for the timeline
function BackgroundDiv(props) {

    // Calculate the height
    const divHeight = getDivHeightForEra(props.era);

    // Generate the Style
    const divStyle = {
        width: "100%",
        height: divHeight + "px",
        backgroundColor: props.era.backColor,
    }

    return (
        <div style={divStyle}>
            <div className="watermark">{props.era.id}</div>
        </div>
    );

}

export default BackgroundDiv;