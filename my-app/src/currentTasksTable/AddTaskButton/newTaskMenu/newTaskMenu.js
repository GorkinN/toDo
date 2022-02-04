import React from "react";
import "./newTaskMenu.css"

export default class NewTaskMenu extends React.Component {
    constructor(props) {
        super(props);
        this.postTask=this.postTask.bind(this);
    }
    componentDidMount() {
        let newTaskText = document.getElementById("newTaskText");
        newTaskText.focus();
    }
    componentWillUnmount() {
        
    }
    
    postTask(event) {
        event.preventDefault();
        let newTaskForm = document.querySelector(".new-task-menu");
        let newTaskText = document.getElementById("newTaskText");
        let newTaskDate = document.getElementById("newTaskDate");

        newTaskText.value = "";
        newTaskDate.value = "";
        newTaskForm.style.display = "none";
    }

    render () {
        return (
            <form className="new-task-menu" method="POST" action="#" onSubmit={this.postTask}>
                <p className="new-task-menu__form-caption">Make new task</p>
                <div className="new-task-menu__container">
                    <p className="new-task-menu__caption">Enter task:</p>
                    <textarea 
                    className="new-task-menu__task-text" 
                    name="newTaskText"
                    id="newTaskText"
                    placeholder="Enter task text here" 
                    rows="1" 
                    required 
                    autofocus></textarea>
                </div>
                <div className="new-task-menu__container_date">
                    <p className="new-task-menu__caption">Choose deadline date:</p>
                    <input 
                    className="new-task-menu__date" 
                    name="newTaskDate"
                    id="newTaskDate"
                    type="date" />
                </div>
                <div className="new-task-menu__container">
                    <input className="new-task-menu__submit-button" type="submit" value="Add task" />
                </div>               
            </form>
        );
    }
}