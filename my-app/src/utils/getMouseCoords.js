function getMouseCoords(event) {
    return ({
        top:event.clientX,
        left:event.clientY
    });
}
export {getMouseCoords};