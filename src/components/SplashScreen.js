import React from 'react';

const splashScreenStyle = {
    width: "100%",
    height: "100vh",
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    fontStyle: "italic",
    paddingTop: "25vh",
    zIndex: "1"
}

function SplashScreen(props) {

    return (
        <div style={splashScreenStyle}>
            <h1>The Curriculum Vitae of Jeff See</h1>
            <p>
                Curriculum Vitae (noun): From the latin for 'course of life'.<br />
                Jeff See (noun): Full-Stack Software Developer. Adaptable, Fast Learner, Pragmatic, Reliable. All those other good words.
            </p>
        </div>
    );

}

export default SplashScreen;