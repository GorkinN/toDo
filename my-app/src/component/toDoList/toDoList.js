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
        this.onClickTerminateTask = this.onClickTerminateTask.bind(this);
    }
    componentDidMount(){
        
        console.log(localStorage.getItem("taskList"));
        /*if (localStorage.getItem("taskList")) {
            this.setState({
                taskList:localStorage.getItem("taskList")
            });
        }*/
       /*if (localStorage.getItem("completedTaskList")) {
            this.setState({
                completedTaskList:localStorage.getItem("completedTaskList")
            });
        }*/
    }
    componentDidUpdate(){
        console.log("tasklist", this.state.taskList)
        localStorage.setItem("taskList", JSON.stringify(this.state.taskList));
        console.log("taskList",localStorage.getItem("taskList"));
        localStorage.setItem("completedTaskList", JSON.stringify(objectsInArrayToStrings(this.state.completedTaskList)));
        console.log("completedTaskList",localStorage.getItem("completedTaskList"));
    }
    onClickDeleteTask(idToDelete){
        let currentTaskList = stringsInArrayToObjects(this.state.taskList);
        for (let i=0; i<currentTaskList.length; i++) {
            if (currentTaskList[i].id === idToDelete) {
                let completedTaskObj = currentTaskList.splice(i, 1)[0];
                this.addToCompletedList(completedTaskObj);
                break;
            }
        }
        currentTaskList = objectsInArrayToStrings(currentTaskList);
        this.setState({ taskList:currentTaskList });

    }
    onClickTerminateTask(idToKill) {
        let currentCompletedTaskList = stringsInArrayToObjects(this.state.completedTaskList);
        for (let i=0; i<currentCompletedTaskList.length; i++) {
            if (currentCompletedTaskList[i].id === idToKill) {
                currentCompletedTaskList.splice(i, 1);
                break;
            }
        }
        let resultCompletedTaskList = objectsInArrayToStrings(currentCompletedTaskList);
        console.log(resultCompletedTaskList);
        this.setState({ completedTaskList:resultCompletedTaskList });
    }
    addToCompletedList(completedTaskObj) {
        let task = JSON.stringify(completedTaskObj);
        if (this.state.completedTaskList.length>0) {
            this.setState((prevState) => {
                return ({
                    completedTaskList : [...prevState.completedTaskList, task],
                });
            });
        } else {
            this.setState({ completedTaskList: [task] }); 
        }
    }
    onSubmitNewTask() {
        let task = JSON.stringify(this.makeNewTaskObj());
        this.setState((prevState) => {
                return ({
                    taskList : [...prevState.taskList, task],
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

    }
    makeNewTaskObj() {
        let newTaskText = document.getElementById("newTaskText");
        let newTaskDeadline = document.getElementById("newTaskDeadline");
        let currentTime = new Date();
        return {
            dateOfCreation : currentTime.toLocaleDateString(),
            taskText : newTaskText.value,
            deadline : new Date(newTaskDeadline.value),
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
        let completedTasksList = (
            isCompletedTasksVisible && 
            isThereAnyCompletedTasks && 
            <CompletedTasksList completedTaskList={this.state.completedTaskList} terminateTask={this.onClickTerminateTask}/>
            );

        return (
            <article className='tasksSection'>
                <section className='toDoSection'>
                    <CurrentTasksTable 
                    tasksArray={this.state.taskList} onClickDeleteTask={this.onClickDeleteTask} 
                    />
                    {noTasksMessage}    
                    <div className='controlBlock'>
                        <div className="controlBlock_item">
                            <NewTaskContainer  onSubmitNewTask={this.onSubmitNewTask}/>
                            </div>
                        <div className="controlBlock_item">
                            <ShowCompletedTasksListButton 
                            onClickShowCompletedTasks={this.onClickShowCompletedTasks}
                            isShown={this.state.isCompletedTasksVisible}                    
                            />
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
