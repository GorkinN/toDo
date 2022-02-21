import React, {Fragment} from 'react';
import "./completedTasksList.css";
//import Completedtasklist from "./completedTaskList.jsx";
import {CompletedTaskItem} from './completedTaskItem/completedTaskItem.jsx';
import {stringsInArrayToObjects} from "../toDoList/../../utils/arrays_JSON";
import {convertDateForUI} from "../../utils/convertDateForUI";

function CompletedTasksList({completedTaskList}) {
    function makeCompletedTasksList(arrayOfCompletedTasks) {
        function evalDeadline(deadlineDate) {
            if (!deadlineDate) {return "ok"};
            let deadline = new Date(deadlineDate);
            let difference = deadline.getDate()-currentDate.getDate();
            let isOnTime =  (deadline-currentDate)>0;
            if (isOnTime) {return "ok"};
            difference = Math.abs(difference);
            let msg = (difference>1)? `${difference} days late`:`${difference} day late`;
            return msg;
        }
        function formCompletedTaskItem(taskObj) {
            let {deadline, taskText, id} = taskObj;
            return ({
                completionDate:convertDateForUI(currentDate),
                task:taskText,
                deadline:evalDeadline(deadline),
                taskId:id
            });
        }
        let initialTaskArray = stringsInArrayToObjects(arrayOfCompletedTasks);
        let currentDate = new Date();
        return (initialTaskArray.map((item)=>(formCompletedTaskItem(item))));
    }
        
    return (
        <table className="completedTasksList">
            <caption className="tableCaption">List of completed tasks</caption>
                <tbody>
                    <tr className="completedTasksList__head">
                        <th className="completedTasksList__head-cell">Date of completion</th>
                        <th className="completedTasksList__head-cell">Task</th>
                        <th className="completedTasksList__head-cell">Met the deadline?</th>
                        <th className="completedTasksList__head-cell">Delete</th>
                    </tr>
                    <Fragment>
                        {makeCompletedTasksList(completedTaskList).map(
                            (task)=>(<CompletedTaskItem key={task.taskId} taskItem={task}/>))
                        }
                    </Fragment>
                </tbody>   
        </table>
    );
}
export {CompletedTasksList};