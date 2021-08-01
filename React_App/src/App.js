import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// --------------   IMPORTED COMPONENTS  ------------------
import HomeIndexComp from "./Components/Home_Page/HomeComp.jsx";
import PostJob from "./Components/Post_Job/PostJob.jsx";
import NavBar from "./Components/Home_Page/NavBar.jsx";
import JobsListPage from "./Components/Job_Search/JobsListPage.jsx";
import JobPage from "./Components/Job_Search/JobPage.jsx";
import ProducerPage from "./Components/Producer_Display/ProducerComponent/ProducerIndexComp.jsx";
import Registration from "./Components/Home_Page/Registration.jsx";
import NotFoundPage from "./Components/Home_Page/NotFoundPage.jsx";
import './App.css';

const App =()=> {

    return (
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" component={HomeIndexComp} exact/>
          <Route path="/job-list" component={JobsListPage} />
          <Route path="/job/:name" component={JobPage} />
          <Route path="/producer-display" component={ProducerPage} />
          <Route path="/post-job" component={PostJob} />
          <Route path="/registration" component={Registration} />
          {/* 
            if you don't give a route a path like below, it will always match by default.
            Switch makes sure only one route is rendered at a time. Not Found page needs to be last.
          */}
          <Route component={NotFoundPage} />
        </Switch>
        

      </Router>
    );

}
export default App;


// 