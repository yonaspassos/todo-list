import React, { Component } from 'react';
import './style.css';

class Header extends Component {
    render () {
        let action = null;
        if (this.props.action === 'add') {
            action = <div className="add">+</div>;
        } else {
            action = <div className="close">X</div>;
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