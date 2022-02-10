import React from 'react';
import {CurrentTasksTable} from "./currentTasksTable/currentTasksTable.js";
import {NewTaskContainer} from "./newTaskContainer/newTaskContainer.js";
class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskList:[],
            taskId:0,
            isNewTaskMenuVisible: false,
        };
        this.onSubmitNewTask = this.onSubmitNewTask.bind(this);
    }
 

    onSubmitNewTask() {
        console.log("onSubmitNewTask");
        let newTask = JSON.stringify(this.makeNewTaskObj());
        console.log("newTask", newTask);
        this.setState((prevState) => {
                return ({
                    taskList : [...prevState.taskList, newTask],
                    taskId : prevState.taskId + 1 
                });
            });
    }
    makeNewTaskObj() {
        let newTaskText = document.getElementById("newTaskText");
        let newTaskDeadline = document.getElementById("newTaskDeadline");
        let currentTime = new Date();
        return {
            dateOfCreation : currentTime.toLocaleDateString(),
            taskText : newTaskText.value,
            deadline : newTaskDeadline.value,
            id : this.state.taskId
        };        
    }
    render () {
        return (
            <div>
                <CurrentTasksTable tasksArray={this.state.taskList}/>
                <NewTaskContainer onSubmitNewTask={this.onSubmitNewTask}/>
                <div>id={this.state.taskId}</div>
                <div>tsklist={this.state.taskList}</div>
            </div>
        );
    }
}
export {ToDoList};
