// The date to start the time line from
export const timelineStartDate = new Date("1982-06-01");

// Get the number of days between two given dates
// Used to calculate placement (and heights of things)
export function calculateDaysDifference(fromDate, toDate, zoomFactor) {

    const oneDay = 1000 * 60 * 60 * 24;
    const differenceInMs = Math.abs(fromDate - toDate);

    return Math.round((differenceInMs / oneDay) / zoomFactor);
}

// Converts a date to use the MMMM yyyy format
export function convertDateToMMMMyyyy(dateToConvert) {

    var d = new Date(dateToConvert);

    var month = d.toLocaleString("en-us", { month: "long" });
    var year = d.getFullYear();

    return month.toString() + " " + year.toString();
}

// Checks if two dates are the same (excluding time)
export function datesAreTheSame(date1, date2) {
    return  date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate();
}

// Gets all years contained between the two given dates (excluding the start/end dates - as we've already drawn them separately)
export function getAllYearsBetweenDates(startDate, endDate) {
    var dateArray = [];

    var currentDate = new Date(startDate.getFullYear() + 1, 0, 1);

    while (currentDate < endDate) {
        dateArray.push(new Date(currentDate));
        currentDate.setFullYear(currentDate.getFullYear() + 1);
    }

    return dateArray;
}