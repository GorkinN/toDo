import React, {useState} from 'react';
import "./completedTasksList.css";
import {objectsInArrayToStrings, stringsInArrayToObjects} from "../toDoList/../../utils/arrays_JSON";


function CompletedTasksList({completedTaskListArray}) {
    let [taskList, setTaskList] = useState([completedTaskListArray]);
    function makeCompletedTasksList(arrayOfCompletedTasks) {
        function evalDeadline(deadlineDate) {
            let difference = deadlineDate-currentDate;
            let isOnTime =  (deadlineDate-currentDate)>0;
            if (isOnTime) {return "Yes"};
            let differenceDaysCount = difference.getDate();
            let msg = (differenceDaysCount>1)? `No (${differenceDaysCount} days late)`:`No (${differenceDaysCount} day late)`;
            return msg;
        }
        function formCompletedTaskItem(taskObj) {
            let {deadline, taskText, id} = taskObj;
            return ({
                completionDate:currentDate,
                task:taskText,
                deadline:evalDeadline(deadline),
                taskId:id
            });
        }
        let taskArray = stringsInArrayToObjects(arrayOfCompletedTasks);
        let currentDate = new Date();
        let resultCompletedTasksArray = taskArray.map((taskObj)=>(taskObj));
        
        
    }
    console.log("taskList",taskList);
    console.log("completedTaskListArray",completedTaskListArray);
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
                </tbody>   
        </table>
    );
}
export {CompletedTasksList};