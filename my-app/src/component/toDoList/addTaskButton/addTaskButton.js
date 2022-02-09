import React from "react";
import "./addTaskButton.css";

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
        <button className='add-task-button' onClick = {this.handleClick}>
            Add new task
        </button>
        );
        
    }
}
export {AddTaskButton};