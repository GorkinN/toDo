import React from "react";
import "./addTaskButton.css";

class AddTaskButton extends React.Component {
    constructor(props) {
        super(props);
        this.showNewTaskMenu=this.showNewTaskMenu.bind(this);
    }
    
    showNewTaskMenu () {
        console.log("click" + this);
        document.querySelector(".new-task-menu").style.display = "block";
        let newTaskTextrea = document.getElementById("newTaskText");
        newTaskTextrea.focus();
        
    }
    
    render() {
        return (
        <button className='add-task-button' onClick = {this.showNewTaskMenu}>
            Add new task
        </button>
        );
        
    }
}
export {AddTaskButton};