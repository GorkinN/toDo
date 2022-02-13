import React from 'react';
import {CurrentTasksTable} from "./currentTasksTable/currentTasksTable.js";
import {NewTaskContainer} from "./newTaskContainer/newTaskContainer.js";
import "./toDoList.css";

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskList:[],
            taskId:0,
            isNewTaskMenuVisible: false,
        };
        this.onSubmitNewTask = this.onSubmitNewTask.bind(this);
        this.onClickDeleteTask = this.onClickDeleteTask.bind(this);
    }
    onClickDeleteTask(idToDelete){
        let currentTaskList = this.state.taskList.map(item=>(JSON.parse(item)));
        console.log("currentTaskList: ",currentTaskList);
        console.log(idToDelete);
        for (let i=0; i<currentTaskList.length; i++) {
            console.log("currentTaskList[i].id",currentTaskList[i].id);
            console.log("cond:",currentTaskList[i].id === idToDelete);
            if (currentTaskList[i].id === idToDelete) {
                currentTaskList.splice(i, 1);
                break;
            }
        }
        console.log("final taskList: ", currentTaskList);
        currentTaskList = currentTaskList.map(item=>JSON.stringify(item));
        this.setState({
            taskList:currentTaskList
        });
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
        let noTasksMessage = (!this.state.taskList.length)? 
        <p className='noTasksMessage'>There are no tasks yet...<br/> 
        Push the button "Add new task" to make the first one
        </p> :null;
        return (
            <div>
                <CurrentTasksTable tasksArray={this.state.taskList} onClickDeleteTask={this.onClickDeleteTask}/>
                {noTasksMessage}                
                <NewTaskContainer onSubmitNewTask={this.onSubmitNewTask}/>
            </div>
        );
    }
}
export {ToDoList};
