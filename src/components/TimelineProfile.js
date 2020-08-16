import React, { useState } from 'react';

import ProfileContact from './ProfileContact.js';

import './timelineStyles.css';

function TimelineProfile(props) {

    const [viewSelection, setViewSelection] = useState("contact");

    let profileImage = "./images/jeff_work_profile.webp"

    let selection = null;
    if (viewSelection === "contact") {
        selection = <ProfileContact />
    }

    return (
        <div className="timelineProfile">
            <img src={profileImage} className="timelineProfileImage" alt="My ugly mug"></img>
            <div className="timelineProfileDetails">
                <p style={{fontSize: "26px", fontWeight: "bold"}}>Jeff See</p>
                <p style={{fontSize: "14px", fontStyle: "italic"}}>Full-Stack Software Developer</p>
            </div>
            <div className="timelineProfileOtherSelect">
                <p>Contact</p>
            </div>
            {selection}
        </div>
    );

}

export default TimelineProfile;