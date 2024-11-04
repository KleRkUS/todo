import { getDateWithLeadingZero } from './getDateWithLeadingZero.js';

export const getCurrentDateString = () => {
    const date = new Date();

    const year = date.getFullYear().toString();
    const month = getDateWithLeadingZero((date.getMonth() + 1).toString());
    const day = getDateWithLeadingZero(date.getDate().toString());

    const hours = getDateWithLeadingZero(date.getHours().toString());
    const minutes = getDateWithLeadingZero(date.getMinutes().toString());
    const seconds = getDateWithLeadingZero(date.getSeconds().toString()); 

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.0004`;
};
