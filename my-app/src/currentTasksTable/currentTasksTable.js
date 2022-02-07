import React from 'react';
import "./currentTasksTable.css";
import AddTaskButton from './AddTaskButton/addTaskButton.js';

import CurrentTask from './currentTask/currentTask.js';

export default class CurrentTasksTable extends React.Component {
    render() {
        let date = new Date();
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
                        <CurrentTask dateOfCreation={date.toLocaleDateString()} taskText="taskText" deadline="deadline"/>
                        <tr>
                            <td className='add-task-cell' colSpan="4">
                                <AddTaskButton />
                            </td>
                        </tr>
                    </tbody>   
            </table>
        );
    }
}