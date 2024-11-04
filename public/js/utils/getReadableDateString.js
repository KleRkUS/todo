export const getReadableDateString = (date) => {
    const dateObj = new Date(date);

    return {
        time: dateObj.toLocaleTimeString('ru-RU'),
        date: dateObj.toLocaleDateString('ru-RU')
    }
};
