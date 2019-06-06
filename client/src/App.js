import React, { Component } from 'react';
import './App.css';
import CoastersList from './components/coasters-list'
import CoasterDetails from './components/coaster-details'

import { Switch, Route } from 'react-router-dom'

class App extends Component {


  constructor(props) {
    super(props)
  }

  render() {

    return (
      <Switch>

        <Route path="/coasters" exact component={CoastersList} />
        <Route path="/coasters/:id" component={CoasterDetails} />
      </Switch>
    )
  }
}

export default App;