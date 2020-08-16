import React from 'react';

import './timelineStyles.css';

function TimelineHeader(props) {

    const scrollDown = () => {
        window.scrollTo(0, window.innerWidth);
    }

    return (
        <div className="timelineHeader">
            <h1>The Curriculum Vitae of Jeff See</h1>
            <p>
                Curriculum Vitae (noun): From the latin for 'course of life'.<br />
                Jeff See (noun): Full-Stack Software Developer. Adaptable, Fast Learner, Pragmatic, Reliable. All those other good words.
            </p>
            <div className="downArrow">
                <button onClick={scrollDown} style={{ backgroundColor: "black", border: "0" }}>
                    <img src="./images/downArrow.webp" alt="Let's Begin"></img>
                </button>
            </div>
        </div>
    );

}

export default TimelineHeader;