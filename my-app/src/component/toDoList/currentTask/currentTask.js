import React from "react";
import "./currentTask.css";
import {convertDateForUI} from "../../../utils/convertDateForUI";
class CurrentTask extends React.Component {
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        console.log("delete task: ", this.props.taskId);
        this.props.onClickDeleteTask(this.props.taskId);
    }
    render() {
        let deadlineDate = convertDateForUI(this.props.deadline);
        return (
            <tr className="currentTasksTable__row">
                    <td className="currentTasksTable__cell">
                        {this.props.dateOfCreation}
                    </td>
                    <td className="currentTasksTable__cell_task-text">
                        {this.props.taskText}
                    </td>
                    <td className="currentTasksTable__cell">
                        {deadlineDate}
                    </td>
                    <td className="currentTasksTable__cell">
                        <button className="execution-button" onClick={this.handleClick}></button>
                    </td>
            </tr>
        );
    }
}
export {CurrentTask};
