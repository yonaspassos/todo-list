import React, { Component } from 'react';
import Header from '../../components/Header';
import Task from '../../components/Task';
import './style.css';

class Tasks extends Component {
    state = {
        tasks: [
            {id: 1, title: 'Estudar'},
            {id: 2, title: 'Ler'},
            {id: 3, title: 'Assistir filme'},
            {id: 4, title: 'lavar louça'}
        ]
    }

    render () {
        return (
            <div>
                <Header title='Minhas Tarefas' action='add' />
                <div className="tasks">
                    <ul>
                        {this.state.tasks.map(task => {
                            return <Task data={task} />;
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Tasks;