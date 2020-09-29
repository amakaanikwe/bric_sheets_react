import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import { Route } from 'react-router-dom';

class App extends React.Component{

  render () {
    return (
      <Router>
       <Route path="/" component={HomeComp} exact/>
      </Router>
    );
  }
}
export default App;
