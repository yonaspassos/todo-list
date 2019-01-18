import React, { Component } from 'react';
import Tasks from './containers/Tasks';
import Add from './containers/Add';
import Details from './containers/Details';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Tasks /> */}

        {/* <Add /> */}

        <Details />

      </div>
    );
  }
}

export default App;
