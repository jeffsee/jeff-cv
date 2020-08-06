import cvEras from '../data/cvEras.js';

import { calculateDaysDifference } from './DateFunctions.js';

export const pixelsPerDay = 4;

// Get the era for the given date
export function getEraForDate(viewDate) {

    // Get the era that the date refers to - should only be one
    var era = cvEras.filter(e => new Date(e.startDate) <= viewDate && (e.endDate === null || new Date(e.endDate) >= viewDate));

    if (era.length !== 1) {
        console.log("ERROR: Didn't get a single era for date: " + viewDate.toString());
        console.log(era);
    }

    return era[0];
}

// Calculates the height for the given era
export function getDivHeightForEra(era) {

    var startDate = new Date(era.startDate);
    var endDate = new Date();
    if (era.endDate !== null) {
        endDate = new Date(era.endDate);
    }

    return getDivHeightForDates(startDate, endDate);
}

export function getDivHeightForDates(startDate, endDate) {
    var daysDifference = calculateDaysDifference(startDate, endDate);

    var height = daysDifference * pixelsPerDay;

    return height;
}

export function getPositionForGivenDate(givenDate) {
    var startDate = new Date(givenDate);
    var endDate = new Date();

    return getDivHeightForDates(startDate, endDate);
}