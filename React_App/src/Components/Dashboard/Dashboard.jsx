import React from 'react';

import './dashboard.css';
import NavBar from '../Home_Page/NavBar';
import PostJob from "./Components/Post_Job/PostJob.jsx";
import JobsListPage from "./Components/Job_Search/JobsListPage.jsx";
import JobPage from "./Components/Job_Search/JobPage.jsx";
import ProducerPage from "./Components/Producer_Display/ProducerComponent/ProducerIndexComp.jsx";
import Footer from '../Home_Page/Footer';

const Dashboard = () => {

    return (
        <>
            <NavBar />
            
            <h1>Dashboard</h1>

            <Footer />
        </>
    )
}

export default Dashboard;