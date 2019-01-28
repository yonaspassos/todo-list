import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Task extends Component {
    render () {
        const task = this.props.data;
        return (
            <li key={task.id}>
                <span>
                    <Link to={`details/${task.id}`} >{task.name}</Link>
                </span>
                <input type="checkbox" onClick={(event) => this.props.delete(task.id)} />
            </li>
        )
    }
}

export default Task;