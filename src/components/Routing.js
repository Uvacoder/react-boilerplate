import React from 'react';
import HomePage from './Homepage';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const Routing = () => {
  return(
    <Router>
      <Route exact path = "/" component = {HomePage} />
    </Router>
  ) 
}

export default Routing;
