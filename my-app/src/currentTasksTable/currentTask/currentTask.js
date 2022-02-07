import React from "react";
import "./currentTask.css";
import {taskList} from "../AddTaskButton/newTaskMenu/newTaskMenu.js";
console.log(taskList);
class CurrentTask extends React.Component {
    render(props) {
        return (
            <tr className="currentTasksTable__row">
                    <td className="currentTasksTable__cell">
                        {this.props.dateOfCreation}
                    </td>
                    <td className="currentTasksTable__cell_task-text">
                         {this.props.taskText} 
                    </td>
                    <td className="currentTasksTable__cell">
                        {this.props.deadline}
                    </td>
                    <td className="currentTasksTable__cell">
                        <button className="execution-button"></button>
                    </td>
            </tr>
        );
    }
}
export {CurrentTask};
