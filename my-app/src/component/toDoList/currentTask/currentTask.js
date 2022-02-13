import React from "react";
import "./currentTask.css";

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
                        <button className="execution-button" onClick={this.handleClick}></button>
                    </td>
            </tr>
        );
    }
}
export {CurrentTask};
