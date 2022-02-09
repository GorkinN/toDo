import "./newTaskContainer.css";
import React from "react";
import {NewTaskMenu} from "../newTaskMenu/newTaskMenu";
import {AddTaskButton} from "../addTaskButton/addTaskButton";
class NewTaskContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isNewTaskMenuVisible:false,
        };
        this.onClickToggleVisibility=this.onClickToggleVisibility.bind(this);
    }
    onClickToggleVisibility() {
        this.setState((state)=>(
            {isNewTaskMenuVisible: !state.isNewTaskMenuVisible}
        ));
    }
    render() {
        if (!this.state.isNewTaskMenuVisible) {
            return (
                <div className="newTaskContainer">
                    <AddTaskButton newTaskMenuVisibility={this.onClickToggleVisibility}/>
                </div>
            );
        } else {
            return (
            <div className="newTaskContainer">
                <AddTaskButton newTaskMenuVisibility={this.onClickToggleVisibility}/>
                <NewTaskMenu  
                onSubmitNewTask={this.props.onSubmitNewTask}
                newTaskMenuVisibility={this.onClickToggleVisibility}/>
            </div>
        );}
        
    }
} 
export {NewTaskContainer};