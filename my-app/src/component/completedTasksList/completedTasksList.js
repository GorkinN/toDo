import React, {useState, useEffect} from 'react';
import "./completedTasksList.css";

function CompletedTasksList() {

    return (
        <table className="completedTasksList">
            <caption className="tableCaption">List of completed tasks</caption>
                <tbody>
                    <tr className="completedTasksList__head">
                        <th className="completedTasksList__head-cell">Task</th>
                        <th className="completedTasksList__head-cell">Met the deadline?</th>
                        <th className="completedTasksList__head-cell">Delete</th>
                    </tr>
                </tbody>   
        </table>
    );
}
export {CompletedTasksList};