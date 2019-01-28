import React, { Component } from 'react';
import Header from '../../components/Header';
import api from '../../services/api';
import './style.css';

class Details extends Component {
    state = {
        taskname: '',
        description: ''
    }

    componentDidMount() {
        const { id, instance } = this.props.match.params;
        api.get(`/todo/${instance}/tasks/${id}.json`).then(response => {
            const task = response.data;
            this.setState({
                taskname: task.taskname,
                description: task.description
            });
        });
    }

    render () {   
        const { instance } = this.props.match.params;
        return (
            <div>
                <Header title={this.state.taskname} action='close'  instance={instance}/>
                <div className='details'>
                    <p>
                    {this.state.description.split('\r\n').map(line => {
                        return <p>{ line }</p>;
                    })}
                    </p>
                </div>

            </div>
        )
    }
}

export default Details;