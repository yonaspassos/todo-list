import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Task extends Component {
    render () {
        const task = this.props.data;
        return (
            <li>
                <span>
                    <Link to={`/details/${task.id}`}>{task.title}</Link>
                </span>
                <input type="checkbox" />
            </li>
        )
    }
}

export default Task;