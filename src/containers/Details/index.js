import React, { Component } from 'react';
import Header from '../../components/Header';
import api from '../../services/api';
import './style.css';

class Details extends Component {
    state = {
        taskname: null,
        description: null
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        api.get(`/tasks/${id}.json`).then(response => {
            const task = response.data;
            this.setState({
                taskname: task.taskname,
                description: task.description
            });
        });
    }

    render () {
        return (
            <div>
                <Header title={this.state.taskname} action='close' />
                <div className="details">
                    <p>
                       {this.state.description}
                    </p>
                </div>

            </div>
        )
    }
}

export default Details;