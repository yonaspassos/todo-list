import React, { Component } from 'react';
import Header from '../../components/Header';
import Task from '../../components/Task';
import api from '../../services/api';
import './style.css';

class Tasks extends Component {
    state = {
        tasks: {}
    }

    componentDidMount() {
        api.get('tasks.json').then(response => {
            const tasks = response.data;
            this.setState({tasks: tasks});
        })
    }

    render () {
        let tasks = [];
        for (let [key, value] of Object.entries(this.state.tasks)) {
            tasks.push({
                id: key,
                name: value.taskname,
                description: value.description
            });
        }
        return (
            <div>
                <Header title='Minhas Tarefas' action='add' />
                <div className="tasks">
                    <ul>
                        {tasks.map(task => {
                            return <Task data={task} />;
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Tasks;