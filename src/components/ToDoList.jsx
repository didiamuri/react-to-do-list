import React, { Fragment } from 'react';
import ToDo from './ToDo';

const ToDoList = ({ tasks, match, onToggleCompleted }) => {
    let filteredTasks;
    switch (match.params.filter) {
        case 'completed':
            filteredTasks = tasks.filter(task => task.completed)
            break;
        default:
            filteredTasks = tasks
    }

    if (filteredTasks.length === 0) {
        return (
            <Fragment>
                <h1 className="m-3">Liste des tâches</h1>
                <ul className="list-group m-3">
                    <li className="list-group-item text-center">Aucune tâche à afficher</li>
                </ul>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <h1 className="m-3">Liste des tâches</h1>
                <ul className="list-group m-3">
                    {filteredTasks.map((task) => <ToDo task={task} key={task.id} onToggleCompleted={onToggleCompleted} />)}
                </ul>
            </Fragment>
        )
    }
};

export default ToDoList;