import React from "react";
import "./popUp.css";
function PopUp({popupMessage, coordsObj}) {
    let {top:coordsTop, left: coordsLeft} = coordsObj;
    let popUpStyle = {
        top:coordsTop,
        left:coordsLeft,
    };
    return (
        <div className="popUp">
            {popupMessage}
        </div>
    );
}
export {PopUp};