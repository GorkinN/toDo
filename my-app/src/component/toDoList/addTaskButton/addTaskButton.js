import React from "react";
import "./addTaskButton.css";
import "../common.css";

class AddTaskButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick() {
        this.props.newTaskMenuVisibility();
    }
    render() {
        return (
        <button className='add-task-button button' onClick = {this.handleClick}>
            Add new task
        </button>
        );
        
    }
}
export {AddTaskButton};