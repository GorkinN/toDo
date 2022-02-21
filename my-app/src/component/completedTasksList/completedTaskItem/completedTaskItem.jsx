import React from 'react';
import "./completedTaskItem.css";

const CompletedTaskItem = ({taskItem, terminateTask}) => {
    let {completionDate, task, deadline, taskId} = taskItem;

    return (
            <tr className="completedTasksList__row">
                <td className="completedTasksList__cell">{completionDate}</td>
                <td className="completedTasksList__cell_task-text">{task}</td>
                <td className="completedTasksList__cell">{deadline}</td>
                <td className="completedTasksList__cell">
                    <button className="terminate-button" onClick={()=>(terminateTask(taskId))}></button>
                </td>
            </tr>
    );
}

export {CompletedTaskItem};
