import React from 'react';

import '../components/cvStyles.css'

function CVHeader(props) {

    const scrollDown = () => {
        window.scrollTo(0, 5);
    }

    if (props.windowPosition > 0) {
        return (<div></div>);
    }

    return (
        <div className="opener">
            <h1>Jeff See's Curriculum Vitae</h1>
            <p style={{fontStyle: "italic"}}>
                Jeff See (noun): Full-Stack Software Developer. Adaptable, Fast Learner, Pragmatic, Reliable. All those other good words.<br />
                Curriculum Vitae (noun): From the latin for 'course of life'.
            </p>
            <p style={{fontStyle: "italic"}}>
                
            </p>
            <div className="downArrow">
                <button onClick={scrollDown} style={{ backgroundColor: "black", border: "0" }}>
                    <img src="./images/downArrow.webp" alt="Let's Begin"></img>
                </button>
            </div>
        </div>
    );

}

export default CVHeader;
