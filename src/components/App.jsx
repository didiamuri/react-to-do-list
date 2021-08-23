import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoList from './ToDoList';
import Footer from './Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AddTask from './AddTask';
import initialData from '../initialData'
import uniqueId from 'uniqueid';
import Fetching from './Fetching';

class App extends React.Component {

    state = {
        tasks: [],
        fetching: true
    }

    componentDidMount = () => {
        let delay = Math.floor(Math.random() * 5000)

        setTimeout(() => {
            this.setState({
                fetching: false,
                tasks: initialData
            })
        }, delay);
    }

    onToggleCompleted = (taskId) => {
        let taskToUpdate = this.state.tasks.find(task => task.id === taskId)
        taskToUpdate.completed = !taskToUpdate.completed

        this.setState(prevState => {
            prevState.tasks.map(task => {
                return task.id === taskId ? taskToUpdate : task
            })
        })
    }

    onAddTask = (newTaskName) => {
        let newTask = {
            id: uniqueId(),
            name: newTaskName,
            completed: false
        }

        this.setState(prevState => ({
            tasks: [...prevState.tasks, newTask]
        }))
    }

    onDeleteCompleted = () => {
        this.setState(prevState => {
            let newState = prevState.tasks.filter(task => !task.completed)
            return {
                tasks: newState
            }
        })
    }

    render() {
        return (
            <section id="todo">
                {this.state.fetching ? <Fetching /> : null}
                <BrowserRouter>
                    <Switch>
                        <Route path="/add-task" render={(props) => <AddTask {...props} onAddTask={this.onAddTask} />} />
                        <Route path="/:filter?" render={(props) => <ToDoList {...props} tasks={this.state.tasks} onToggleCompleted={this.onToggleCompleted} />} />
                    </Switch>
                    <Footer onDeleteCompleted={this.onDeleteCompleted} />
                </BrowserRouter>
            </section>
        );
    }
}

export default App;