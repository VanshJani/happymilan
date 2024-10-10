import moment from 'moment';

// Utility function to get the formatted date
export const getFormattedDate = (dateString) => {
    // Parse the input date string using Moment.js
    const date = moment(dateString);

    // Format the date as per your requirement (e.g., 'DD/MM/YYYY', 'MMMM Do YYYY', etc.)
    const formattedDate = date.format('YYYY-MM-DD'); // Change format as needed

    return formattedDate;
};