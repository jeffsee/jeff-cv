import React from 'react';

import { Generic, Redundant2020, DWS, DST, Redundant2013, Converga, SEMA, UNSW, FortStreet } from './EraViews.js';

import { getPositionForGivenDate } from '../common/EraFunctions.js';

import './cvStyles.css';

const components = {
    generic: Generic,
    redundant2020: Redundant2020,
    dws: DWS,
    dst: DST,
    redundant2013: Redundant2013,
    converga: Converga,
    sema: SEMA,
    unsw: UNSW,
    fshs: FortStreet
}

function CVEra(props) {

    var era = props.era;

    var eraStyle = {
        boxShadow: "10px 10px 10px " + era.shadowColor
    };

    const scrollDown = () => {
        var d = new Date(era.startDate);
        d.setDate(d.getDate() - 2);
        var scrollToPosition = getPositionForGivenDate(d);
        window.scrollTo(0, scrollToPosition);
    }

    // Check to see if there's a component for the era details, and use that - otherwise, just use the generic one below:
    var EraComponent;
    if (era.component) {
        EraComponent = components[era.component];
    }
    else {
        EraComponent = components["generic"];
    }

    // Get the display name
    var title = era.id;
    if (era.displayNames) {
        title = era.displayNames.filter(d => new Date(d.startDate) <= props.date && new Date(d.endDate) >= props.date)[0].display;
    }

    // Get the position for the given date
    var position = era.position;
    if (era.positions) {
        position = era.positions.filter(p => new Date(p.startDate) <= props.date && new Date(p.endDate) >= props.date)[0].position;
    }

    // Get the location for the given date
    var location = era.location;
    if (era.locations) {
        location = era.locations.filter(l => new Date(l.startDate) <= props.date && new Date(l.endDate) >= props.date)[0].location;
    }

    return (
        <div className="era" style={eraStyle}>
            <h1>{title}</h1>
            <h3>{position}</h3>
            <p className="eraSubHeader alignLeft">{era.dateString}</p>
            <p className="eraSubHeader alignRight">{location}</p>
            <div style={{clear: "both"}}>
                <EraComponent era={era} />
            </div>
            <div className="eraDownArrow">
                <button onClick={scrollDown} style={{ backgroundColor: "transparent", border: "0" }}>
                    <img src="./images/darkDownArrow.webp" alt="Next Entry"></img>
                </button>
            </div>
        </div>
    );
}

export default CVEra;