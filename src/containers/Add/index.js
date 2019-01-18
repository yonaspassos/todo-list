import React, { Component } from 'react';
import Header from '../../components/Header';
import './style.css';

class Add extends Component {
    render () {
        return (
            <div>
                <Header title='Nova Tarefa' action='close' />
                <div className='addTask'>
                    <form>
                        <p>
                            <label>Titulo:<br /></label>
                            <input type="text" name="taskname" placeholder="Titulo da tarefa" /><br />
                        </p>
                        <p>
                            <label>Descrição:<br /></label>
                            <textarea rows="10" name="description" placeholder="Descrição da tarefa"></textarea>
                        </p>
                        <button>
                            Salvar
                        </button>
                    </form>
                </div>
            </div>
            
        )


    }
}

export default Add;