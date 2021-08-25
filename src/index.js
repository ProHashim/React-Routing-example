import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';

import Home from './home';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from './create';



function App(param) {
  return (
    <Router>
      <div className="App">
        <Navbar websiteName="React Routing example" />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}
ReactDOM.render(
  <App />, document.getElementById('root')
);

