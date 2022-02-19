import React from "react";
import ReactDOM from 'react-dom';
import { PopUp } from "../popUp";
function showPopUp({popupMessage, coordsObj}){
    const appRoot = document.getElementById("root");
    console.log("popup");
    return ReactDOM.createPortal(<div>Ты чо пёс</div>, appRoot);
   // return ReactDOM.createPortal(<PopUp popupMessage={popupMessage} coordsObj={coordsObj}/>, appRoot);
}
export {showPopUp};