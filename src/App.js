import React, { Component } from 'react';
import Home from './Home';
import Unicorns from './Unicorns';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/Unicorns' component={Unicorns} />
        </Switch>
      </div>
    );
  }
}

export default App;
