import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Route } from 'react-router-dom';
import HomeIndexComp from "./Components/Home_Page/HomeComp.jsx";
import About from "./Components/Home_Page/About.jsx";
import NavBar from "./Components/Home_Page/NavBar.jsx";
import JobsList from "./Components/Job_Search/JobsList.jsx";
import JobPage from "./Components/Job_Search/JobPage.jsx";
import './App.css';

class App extends React.Component{

  render () {
    return (
      <Router>
        <NavBar />
        <Route path="/" component={HomeIndexComp} exact/>
        <Route path="/about" component={About} />
        <Route path="/job-list" component={JobsList} />
        <Route path="/Job" component={JobPage} />
      </Router>
    );
  }
}
export default App;
