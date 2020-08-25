import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getItem } from './config/local';

function App(props) {

  const token = getItem('auth');

  return (
    <Router>
      <Switch>
        <Route 
          exact
          path='/'
          render={props => <Home {...props} token={token} />}
        />
        <Route 
          exact
          path='/calendar'
        />
      </Switch>
    </Router>
    
  );
}

export default App;
