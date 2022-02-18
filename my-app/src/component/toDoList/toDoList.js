import React from 'react';
import {CurrentTasksTable} from "./currentTasksTable/currentTasksTable.js";
import {NewTaskContainer} from "./newTaskContainer/newTaskContainer.js";
import "./toDoList.css";
import {CompletedTasksList} from "../completedTasksList/completedTasksList";
import {ShowCompletedTasksListButton} from "./showComplitedTasksButton/showComplitedTasksButton";
import {objectsInArrayToStrings, stringsInArrayToObjects} from "../../utils/arrays_JSON";

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskList:[],
            completedTaskList:[],
            taskId:0,
            isNewTaskMenuVisible: false,
            isCompletedTasksVisible:false,
        };
        this.onSubmitNewTask = this.onSubmitNewTask.bind(this);
        this.onClickDeleteTask = this.onClickDeleteTask.bind(this);
        this.onClickShowCompletedTasks=this.onClickShowCompletedTasks.bind(this);
    }
    onClickDeleteTask(idToDelete){
        let currentTaskList = stringsInArrayToObjects(this.state.taskList);
        for (let i=0; i<currentTaskList.length; i++) {
            if (currentTaskList[i].id === idToDelete) {
                currentTaskList.splice(i, 1);
                break;
            }
        }
        currentTaskList = objectsInArrayToStrings(currentTaskList);
        this.setState({ taskList:currentTaskList });
    }
    onSubmitNewTask() {
        let newTask = JSON.stringify(this.makeNewTaskObj());
        this.setState((prevState) => {
                return ({
                    taskList : [...prevState.taskList, newTask],
                    taskId : prevState.taskId + 1 
                });
            });
    }
    onClickShowCompletedTasks(){
        let isThereAnyCompletedTasks = this.state.completedTaskList.length>0;
        if (!isThereAnyCompletedTasks) {return;}

        this.setState(state => ({
            isCompletedTasksVisible:!state.isCompletedTasksVisible
        }));

        console.log(this.state.isCompletedTasksVisible)
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
        <p className='noTasksMessage'>There are no tasks yet.<br/> 
        Push the button "Add new task" to make the first one
        </p> :null;
        
        let isCompletedTasksVisible = this.state.isCompletedTasksVisible;
        let isThereAnyCompletedTasks = this.state.completedTaskList.length>0;
        let completedTasksList = (isCompletedTasksVisible && isThereAnyCompletedTasks && <CompletedTasksList/>);

        return (
            <article className='tasksSection'>
                <section className='toDoSection'>
                    <CurrentTasksTable tasksArray={this.state.taskList} onClickDeleteTask={this.onClickDeleteTask}/>
                    {noTasksMessage}    
                    <div className='controlBlock'>
                        <div className="controlBlock_item">
                            <NewTaskContainer  onSubmitNewTask={this.onSubmitNewTask}/>
                            </div>
                        <div className="controlBlock_item">
                            <ShowCompletedTasksListButton onClickShowCompletedTasks={this.onClickShowCompletedTasks}/>
                        </div>
                    </div>
                </section>
                <section className='toDoSection'>
                    {completedTasksList}                    
                </section>
            </article>
        );
    }
}
export {ToDoList};
