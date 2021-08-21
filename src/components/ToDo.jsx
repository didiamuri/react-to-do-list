import React from 'react'
import '../css/App.css'

class ToDo extends React.Component {

    state = {
        completed: this.props.task.completed
    }

    toggleCompleted = () => {
        this.setState(prevState => ({
            completed: !prevState.completed
        }))
        this.props.onToggleCompleted(this.props.task.id)
    }

    render() {
        return (
            <li className="list-group-item d-flex align-items-center">
                <span className={(this.state.completed ? 'completed' : null)}>{this.props.task.name}</span>
                <button className={(this.state.completed ? 'btn btn-sm btn-success ms-auto text-center' : 'btn btn-sm btn-outline-success ms-auto text-center')} onClick={() => this.toggleCompleted()}>&#x2713;</button>
            </li>
        )
    }
}

export default ToDo