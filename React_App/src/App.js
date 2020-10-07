import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomeIndexComp from "./Components/Home_Page/HomeComp.jsx";
import About from "./Components/Home_Page/About.jsx";
import NavBar from "./Components/Home_Page/NavBar.jsx";
import JobsListPage from "./Components/Job_Search/JobsListPage.jsx";
import JobPage from "./Components/Job_Search/JobPage.jsx";
import NotFoundPage from "./Components/Home_Page/NotFoundPage.jsx";
import './App.css';

class App extends React.Component{

  render () {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" component={HomeIndexComp} exact/>
          <Route path="/about" component={About} />
          <Route path="/job-list" component={JobsListPage} />
          <Route path="/Job/:name" component={JobPage} />
          {/* 
            if you don't give a route a path like below, it will always match by default .
            Switch makes sure only one route is rendered at a time. Not Found page needs to be last.
          */}
          <Route component={NotFoundPage} />
        </Switch>
        

      </Router>
    );
  }
}
export default App;


// 