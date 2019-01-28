import React, { Component } from 'react';
import Header from '../../components/Header';
import Task from '../../components/Task';
import { Redirect } from 'react-router-dom';
import api from '../../services/api';
import './style.css';

class Tasks extends Component {
    state = {
        tasks: []
    }

    componentDidMount() {
        let { instance } = this.props.match.params;
        if (instance === undefined) {
            instance = 'general';
        }
        api.get(`/todo/${instance}/tasks.json`).then(response => {
            let tasks = [];
            for (let [key, value] of Object.entries(response.data)) {
                tasks.push({
                    id: key,
                    name: value.taskname,
                    description: value.description
                });
            }
            this.setState({tasks: tasks});
        });
       
    }

    removeTaskHandler = taskId => {
        api.delete(`/tasks/${taskId}.json`);
        const tasks = this.state.tasks.filter(task => {
            if (task.id === taskId) {
                return false;
            } else {
                return true;
            }
        });
        this.setState({tasks: tasks});
    }

    render () {
        const { instance } = this.props.match.params;
        if (!instance) {
            return <Redirect to='/general/' />;
        }
        return (
            <div>
                <Header title='Minhas Tarefas' action='add' instance={instance}/>
                <div className="tasks">
                    <ul>
                        {this.state.tasks.map(task => {
                            return <Task data={task} delete={this.removeTaskHandler} />;
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Tasks;