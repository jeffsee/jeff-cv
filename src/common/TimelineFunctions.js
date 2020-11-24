import React from 'react';

export function calculateTextWidth(text, font) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext("2d");
    context.font = font;
    return context.measureText(text).width;
}

// Converts the detail paragraphs in the events to html
export function BuildDetailParagraphs(detailParagraphs) {

    // eslint-disable-next-line
    var timelineText = detailParagraphs.map((d, i) => {
        if (d.type === "p") {
            return <p key={i} className="eventParagraph">{d.text}</p>;
        }
        else if (d.type === "ul") {
            return <ul key={i}>
                {d.listItems.map((l, j) => <li key={j}>{l}</li>)}
            </ul>;
        }
    });

    return timelineText;
}

// Converts the skills list to html
export function BuildSkillList(skills) {

    var skillText = skills.map((d, i) => {
        return <li key={i}><b>{d.type}</b>{d.text && <span>: {d.text}</span>} </li>
    })

    return <ul>{skillText}</ul>;
}