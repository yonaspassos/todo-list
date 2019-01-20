import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Header extends Component {
    render () {
        let action = null;
        if (this.props.action === 'add') {
            action = <div className="add">
                <Link to={`/add`}>+</Link>
            </div>;
        } else {
            action = <div className="close">
                <Link to={`/`}>X</Link>
            </div>;
        }
        

        return (
            <header>
                <div className="title">
                    <h1>{this.props.title}</h1>
                </div>
                {action}
            </header>
        );
    }
}

export default Header;