import React from "react";
import "./showComplitedTasksButton.css";
import "../common.css";
import {showPopUp} from "../../common/popUp/showPopUp/showPopUp";
import {getMouseCoords} from "../../../utils/getMouseCoords";

class ShowCompletedTasksListButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(event) {
        this.props.onClickShowCompletedTasks();
        let coords = getMouseCoords(event);
        showPopUp("hello", coords);
    }
    render() {
        let value = (this.props.isShown)? "Hide completed tasks":"Show completed tasks";
        return (
        <button className='button' onClick = {this.handleClick}>
            {value}
        </button>
        );
        
    }
}
export {ShowCompletedTasksListButton};