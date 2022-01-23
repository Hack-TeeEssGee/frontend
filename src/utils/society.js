const getSocietyID = (societyName) => {

    const societyList = JSON.parse(localStorage.getItem("societyList"));
    var ID = null;
    societyList.forEach(society => {
        if (society.name === societyName) ID = society.id;
    });

    return ID;
}

const filterEvents = (eventList, mode) => {

    // if mode = 0 : return current events
    // if mode = 1 : return past events

    const filteredEvents = [];

    eventList.forEach(event => {

        const endDate = new Date(event.end_date);
        const today = new Date();

        if ((mode === 0 && endDate.toString() > today.toString()) || (mode === 1 && endDate.toString() < today.toString())) filteredEvents.push(event);
    })

    return filteredEvents;
}

export {getSocietyID, filterEvents};