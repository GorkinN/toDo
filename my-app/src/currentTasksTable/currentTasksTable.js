import React from 'react';
import "./currentTasksTable.css";
import AddTaskButton from './AddTaskButton/addTaskButton.js';

export default class CurrentTasksTable extends React.Component {
    render() {
        return (
            <table className="currentTasksTable">
                <caption className="tableCaption">List of current tasks</caption>
                <tr className="currentTasksTable__head">
                    <th className="currentTasksTable__head-cell">Date of creation</th>
                    <th className="currentTasksTable__head-cell">Task</th>
                    <th className="currentTasksTable__head-cell">Deadline</th>
                    <th className="currentTasksTable__head-cell">Execution</th>
                </tr>
                <tr className="currentTasksTable__row">
                    <td className="currentTasksTable__cell">Date of creation</td>
                    <td className="currentTasksTable__cell_task-text">Tassdsdk</td>
                    <td className="currentTasksTable__cell">Deadline</td>
                    <td className="currentTasksTable__cell">
                        <button className="execution-button"></button>
                    </td>
                </tr>
                <tr>
                    <td className='add-task-cell' colSpan="4">
                        <AddTaskButton />
                    </td>
                </tr>
                
                
            </table>
        );
    }
}