import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Route } from 'react-router-dom';
import HomeIndexComp from "./Components/Home_Page/HomeComp.jsx";
import About from "./Components/Home_Page/About.jsx";
import './App.css';

class App extends React.Component{

  render () {
    return (
      <Router>
       <Route path="/" component={HomeIndexComp} exact/>
       <Route path="/about" component={About} />
      </Router>
    );
  }
}
export default App;
