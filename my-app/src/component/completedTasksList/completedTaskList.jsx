import React from 'react';

const Completedtasklist = ({tasksArray}) => {
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
                    {this.props.children}
                </tbody>   
        </table>
    );
}

export default Completedtasklist;
