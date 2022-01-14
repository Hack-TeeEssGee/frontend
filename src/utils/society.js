const getSocietyID = (societyName) => {

    const societyList = JSON.parse(localStorage.getItem("societyList"));
    var ID = null;
    societyList.forEach(society => {
        if (society.name === societyName) ID = society.id;
    });

    return ID;
}

export default getSocietyID;