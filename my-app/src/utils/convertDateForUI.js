function convertDateForUI(date) {
    if (!date) {return;}
    let dateObj = new Date(date);
    return dateObj.toLocaleDateString();
}

export {convertDateForUI};