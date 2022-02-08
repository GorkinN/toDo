import React from 'react';
import {CurrentTasksTable} from "./currentTasksTable/currentTasksTable.js";
import {NewTaskMenu} from "./newTaskMenu/newTaskMenu.js";
class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render () {
        return (
            <div>
                <CurrentTasksTable/>
                <NewTaskMenu/>
            </div>
        );
    }
}
export {ToDoList};