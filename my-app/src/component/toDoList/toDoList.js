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
        let newTask = this.makeNewTaskObj();
        this.setState((prevState) => {
                return ({
                    //taskList : [...prevState.taskList, newTask],
                    //taskId : prevState.taskId + 1 
                });
            });
    }
    makeNewTaskObj() {
        let newTaskText = document.getElementById("newTaskText");
        let newTaskDeadline = document.getElementById("newTaskDeadline");
        let currentTime = new Date();
        let taskId = this.state.taskId;
        return ({
            dateOfCreation: currentTime.toLocaleDateString(),
            taskText: newTaskText.value,
            deadline: newTaskDeadline.value,
            id:taskId,
        });        
    }
    render () {
        return (
            <div>
                <CurrentTasksTable/>
                <NewTaskContainer onSubmitNewTask={this.onSubmitNewTask}/>
                <div>id={this.state.taskId}</div>
                <div>tsklist={this.state.taskList}</div>
            </div>
        );
    }
}
export {ToDoList};