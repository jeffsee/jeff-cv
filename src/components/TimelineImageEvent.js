import React, { useState } from 'react';
import Carousel, { Modal, ModalGateway } from "react-images";

import './timelineStyles.css';

import { BuildDetailParagraphs } from '../common/TimelineFunctions.js';

function TimelineTextEvent(props) {

    // State for the modal on/off
    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    // Function for the modal on/off
    function toggleModal(e) {
        e.preventDefault();
        setModalIsOpen(prevState => !prevState);
    }

    const referenceImage = [
        { id: 1, source: props.event.image, caption: props.event.imageCaption }
    ];

    // If no event passed in, provide the default slide (shouldn't get here)
    if (props.event === null || props.event === undefined) {
        // TODO
        return (
            <div className="timelineEvent"><h1 className="timelineHeading">No event.</h1></div>
        );
    }

    // Generate the paragraphs
    var timelineText = BuildDetailParagraphs(props.event.detailParagraphs);

    // If we have a background - display it
    let icon = null;
    if (props.event.backgroundImage) {
        icon = 
        <div className="timelineBackground">
            <img src={props.event.backgroundImage} alt="Icon" width="100%" height="100%"></img>
        </div>;
    }

    // Set the colors (default to black on white)
    let backColor = "#FFFFFF";
    if (props.event.backColor) {
        backColor = props.event.backColor;
    }

    let foreColor = "#000000";
    if (props.event.color) {
        foreColor = props.event.color;
    }

    const eventStyle = {
        backgroundColor: backColor,
        color: foreColor,
        position: "relative"
    };

    const imageStyle = {
        backgroundImage: "url(\"" + (props.event.image) + "\")",
        cursor: "pointer",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center"
    }

    return (
        <div className="timelineEvent" style={eventStyle}>
            <div className="timelineEventSplitImage" onClick={toggleModal} style={imageStyle}>
            </div>
            <div className="timelineEventSplitText" style={{ position: "relative" }}>
                <p className="timelineDateHeader">{props.event.dateString}</p>
                <h1 className="timelineHeading">{props.event.heading}</h1>
                <h3 className="timelineSubheader">{props.event.subHeading}</h3>
                {timelineText}
                {icon}
            </div>

            <ModalGateway>
                {modalIsOpen ? (
                    <Modal onClose={toggleModal}>
                        <Carousel views={referenceImage} />
                    </Modal>
                ) : null} 
            </ModalGateway>

        </div>
    )

}

export default TimelineTextEvent;