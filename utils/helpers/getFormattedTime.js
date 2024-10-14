import moment from 'moment-timezone';

// Utility function to get the time in Indian Standard Time (IST) format
export const getFormattedTime = (isoString) => {
    // Parse the input time and set the time zone to IST
    const time = moment(isoString).tz('Asia/Kolkata');

    // Format the time as per your need (e.g., hh:mm A for 12-hour format with AM/PM)
    const formattedTime = time.format('hh:mm A'); // 12-hour format with AM/PM

    return formattedTime;
};