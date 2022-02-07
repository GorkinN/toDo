import React from "react";
import "./newTaskMenu.css";

let taskList =[];
let taskListID = 0;
export default class NewTaskMenu extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit=this.onSubmit.bind(this);
        this.onClickCloseMenu = this.onClickCloseMenu.bind(this);
    }
       
    onSubmit(event) {
        event.preventDefault();
        let newTaskForm = document.querySelector(".new-task-menu");
        let newTaskText = document.getElementById("newTaskText");
        let newTaskDeadline = document.getElementById("newTaskDeadline");
        let currentTime = new Date();
        let newTask = {
            dateOfCreation: currentTime.toLocaleDateString(),
            taskText: newTaskText.value,
            deadline: newTaskDeadline.value,
            id:taskListID,
        };
        taskListID++;
        taskList.push(newTask);
        console.log("taskList", taskList);
        console.log("newTask", newTask);
        newTaskText.value = "";
        newTaskDeadline.value = "";
        newTaskForm.style.display = "none";
    }
    
    onClickCloseMenu() {
        let newTaskForm = document.querySelector(".new-task-menu");
        let newTaskText = document.getElementById("newTaskText");
        let newTaskDeadline = document.getElementById("newTaskDeadline");
        newTaskText.value = "";
        newTaskDeadline.value = "";
        newTaskForm.style.display = "none";
    }
    render () {
        
        return (
            <form className="new-task-menu" method="POST" action="#" onSubmit={this.onSubmit}>
                <p className="new-task-menu__form-caption">Make new task</p>

                <div className="new-task-menu__container">
                    <label htmlFor="newTaskText" className="new-task-menu__caption">Enter task:</label>
                    <textarea 
                    className="new-task-menu__task-text" 
                    name="newTaskText"
                    id="newTaskText"
                    placeholder="Enter task text here" 
                    rows="1" 
                    required></textarea>
                </div>

                <div className="new-task-menu__container_date">
                    <label htmlFor="newTaskDeadline" className="new-task-menu__caption">Choose deadline date:</label>
                    <input 
                    className="new-task-menu__date" 
                    name="newTaskDeadline"
                    id="newTaskDeadline"
                    type="date" />
                </div>

                <div className="new-task-menu__container">
                    <input 
                    className="new-task-menu__submit-button" 
                    type="submit" 
                    value="Add task" />

                    <button 
                    className="new-task-menu__submit-button" 
                    onClick={this.onClickCloseMenu}>
                        Close
                    </button>

                </div>               
            </form>
        );
    }
}