function convertDateForUI(date) {
    let dateObj = new Date(date);
    return dateObj.toLocaleDateString();
}

export {convertDateForUI};