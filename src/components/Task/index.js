import React, { Component } from 'react';

class Task extends Component {
    render () {
        return (
            <li>
                <span>{this.props.title}</span>
                <input type="checkbox" />
            </li>
        )
    }
}

export default Task;