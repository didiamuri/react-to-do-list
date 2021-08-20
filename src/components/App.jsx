import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoList from './ToDoList';
import Footer from './Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AddTask from './AddTask';
import initialData from '../initialData'

class App extends React.Component {
    render() {
        return (
            <section id="todo">
                <BrowserRouter>
                    <Switch>
                        <Route path="/add-task" component={AddTask} />
                        <Route path="/:filter?" render={(props) => <ToDoList {...props} task={initialData} />} />
                    </Switch>
                    <Footer />
                </BrowserRouter>
            </section>
        );
    }
}

export default App;