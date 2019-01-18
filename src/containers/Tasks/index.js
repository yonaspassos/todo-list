import React, { Component } from 'react';
import Header from '../../components/Header';
import Task from '../../components/Task';
import './style.css';

class Tasks extends Component {
    state = {
        tasks: [
            'Estudar',
            'Ler',
            'Assistir filme',
            'lavar louça'
        ]
    }

    render () {
        return (
            <div>
                <Header title='Minhas Tarefas' action='add' />
                <div className="tasks">
                    <ul>
                        {this.state.tasks.map(task => {
                            return <Task title={task} />;
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Tasks;