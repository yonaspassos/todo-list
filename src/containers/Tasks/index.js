import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../../components/Header';
import Task from '../../components/Task';
import api from '../../services/api';
import './style.css';

class Tasks extends Component {

    constructor (props) {
        super(props);
        const { instance } = props.match.params;
        this.baseURL = `/todo/${instance || 'general'}`;
        this.state = {
            todo: [],
            done: []
        }
    }

    componentDidMount() {
        this.fetchTasksHandler();
    }

    fetchTasksHandler = () => {
        api.get(`${this.baseURL}/tasks.json`).then(response => {
            let todo = [];
            let done = [];
            for (let [key, value] of Object.entries(response.data)) {
                const task = {
                    id: key,
                    name: value.taskname,
                    description: value.description,
                    done: value.done
                };
                if (value.done === true) {
                    done.push(task);
                } else {
                    todo.push(task);
                }
            }
            this.setState({ done: done, todo: todo });
        });
    }

    removeTaskHandler = taskId => {
        const selectedTask = this.state.todo.find(task => taskId === task.id);
        api.put(`${this.baseURL}/tasks/${selectedTask.id}.json`, {
            taskname: selectedTask.name,
            description: selectedTask.description,
            done: true
        }).then(response => {
            this.fetchTasksHandler();
        });
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
                        {this.state.todo.map(task => {
                            return <Task
                                key={task.id}
                                data={task}
                                delete={this.removeTaskHandler}
                            />;
                        })}
                        <li className="done-separator">Concluidos</li>
                        {this.state.done.map(task => {
                            return <Task
                                key={task.id}
                                data={task}
                                done
                            />;
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Tasks;