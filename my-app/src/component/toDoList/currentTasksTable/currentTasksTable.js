import React, {Fragment} from 'react';
import "./currentTasksTable.css";
import {CurrentTask} from "../currentTask/currentTask.js";

class CurrentTasksTable extends React.Component {
    
    showCurrentTasks(tasksArrayJSON) {
        if (!tasksArrayJSON.length) {return;}
        let taskList = tasksArrayJSON.map((item) => {
            return JSON.parse(item);
        });
        let taskListItems = taskList.map((item)=>(
            <CurrentTask 
            key={item.id} 
            dateOfCreation={item.dateOfCreation} 
            taskText={item.taskText} 
            deadline={item.deadline}/>
        ));
        return (
            <Fragment>
                {taskListItems}
            </Fragment>
            
            );       
    };

    render() {
        console.log("this.props.tasksArray",this.props.tasksArray);
        return (
            <table className="currentTasksTable">
                <caption className="tableCaption">List of current tasks</caption>
                    <tbody>
                        <tr className="currentTasksTable__head">
                            <th className="currentTasksTable__head-cell">Date of creation</th>
                            <th className="currentTasksTable__head-cell">Task</th>
                            <th className="currentTasksTable__head-cell">Deadline</th>
                            <th className="currentTasksTable__head-cell">Execution</th>
                        </tr>
                        {this.showCurrentTasks(this.props.tasksArray)}
                    </tbody>   
            </table>
        );
    }
}
export {CurrentTasksTable};