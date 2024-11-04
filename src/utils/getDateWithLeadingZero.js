export const getDateWithLeadingZero = (str) => (
    str.length === 2 ? str : `0${str}`
);