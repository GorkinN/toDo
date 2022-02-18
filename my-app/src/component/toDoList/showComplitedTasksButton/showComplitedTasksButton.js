import React from "react";
import "./showComplitedTasksButton.css";
import "../common.css";

class ShowCompletedTasksListButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick() {
        this.props.onClickShowCompletedTasks();
    }
    render() {
        return (
        <button className='button' onClick = {this.handleClick}>
            Show complited tasks
        </button>
        );
        
    }
}
export {ShowCompletedTasksListButton};