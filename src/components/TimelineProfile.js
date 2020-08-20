import React, { useState } from 'react';

import ProfileContact from './ProfileContact.js';
import ProfileSkills from './ProfileSkills.js';

import './timelineStyles.css';

function TimelineProfile(props) {

    const contactString = "contact";
    const skillString = "skills";

    const [viewSelection, setViewSelection] = useState(contactString);

    let profileImage = "./images/jeff_work_profile.webp"

    let selection = null;
    if (viewSelection === contactString) {
        selection = <ProfileContact />
    }
    else if (viewSelection === skillString) {
        selection = <ProfileSkills event={props.event} />
    }

    // Function to set the selection
    const changeSelection = (newSelection) => {
        setViewSelection(newSelection);
    }

    return (
        <div className="timelineProfile">
            <div className="timelineProfileDetails">
                <p style={{fontSize: "26px", fontWeight: "bold", margin: "10px"}}>Jeff See</p>
                <p style={{fontSize: "14px", fontStyle: "italic", margin: "10px"}}>Full-Stack Software Developer</p>
            </div>
            <div className="timelineProfileOtherSelect">
                <button className="timelineProfileOtherSelectButton" style={{textDecoration: viewSelection === contactString ? "underline" : "none"}} onClick={() => {changeSelection(contactString)}}>Contact Details -&gt;</button>
                <button className="timelineProfileOtherSelectButton" style={{textDecoration: viewSelection === skillString ? "underline" : "none"}} onClick={() => {changeSelection(skillString)}}>Skills -&gt;</button>
            </div>
            {selection}
        </div>
    );

}

export default TimelineProfile;