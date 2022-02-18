function objectsInArrayToStrings (array) {
    return array.map(item => (JSON.stringify(item)));
}
function stringsInArrayToObjects (array) {
    return array.map(item => (JSON.parse(item)));
}
export {objectsInArrayToStrings, stringsInArrayToObjects};