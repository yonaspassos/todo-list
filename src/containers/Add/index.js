import React, { Component } from 'react';
import Header from '../../components/Header';
import api from '../../services/api';
import { Redirect } from 'react-router-dom';
import './style.css';

class Add extends Component {
    state = {
        isSaved: false
    }

    saveDataHandler = (event) => {
        event.preventDefault();
        const form = new FormData(event.target);
        let jsonForm = {};
        form.forEach((value, name) => {
            jsonForm[name] = value;
        });
        jsonForm['done'] = false;
        const { instance } = this.props.match.params;
        api.post(`/todo/${instance}/tasks.json`, jsonForm).then(response => {
            this.setState({isSaved: true});
        }).catch(error => {
            console.error(error);
        })

    }

    render () {
        const { instance } = this.props.match.params;
        if(this.state.isSaved) {
            return <Redirect to={`/${instance}/`} />;
        }
        return (
            <div>
                <Header title='Nova Tarefa' action='close' instance={instance}/>
                <div className='addTask'>
                    <form onSubmit={this.saveDataHandler}>
                        <p>
                            <label>Titulo:<br /></label>
                            <input type="text" name="taskname" placeholder="Titulo da tarefa" /><br />
                        </p>
                        <p>
                            <label>Descrição:<br /></label>
                            <textarea rows="10" name="description" placeholder="Descrição da tarefa"></textarea>
                        </p>
                        <button type="submit">
                            Salvar
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Add;