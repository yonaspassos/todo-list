import React, { Component } from 'react';
import Header from '../../components/Header';
import './style.css';

class Details extends Component {
    render () {
        return (
            <div>
                <Header title='Estudar' action='close' />
                <div className="details">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet ligula risus. Nullam sit amet rutrum lacus. Suspendisse lectus velit, convallis quis vulputate ut, aliquam in libero. Etiam blandit congue leo, id pellentesque mauris feugiat quis. Nulla eget maximus massa. Donec scelerisque sapien sit amet vehicula pretium. Morbi a gravida mi, eget iaculis arcu. Integer ut iaculis nibh. Pellentesque at mollis orci. Curabitur eu pharetra urna.
                    </p>
                </div>

            </div>
        )
    }
}

export default Details;