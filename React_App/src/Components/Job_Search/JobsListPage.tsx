import React from 'react';
import JobsListComp from '../ReuseComponents/JobsListComp.jsx'
import samplePosts from './samplePosts';
import Banner from '../ReuseComponents/BannerComp.jsx'
import '../../App.css';


const JobsListPage = () => (
    <>
    <Banner />
    <section className="container jobListSection">
      
      <header className="jobPageHeader">
          <h1>Let's Find Your Next Job</h1>
          
      </header>
      <JobsListComp posts={ samplePosts } />
    </section>

  </>
)

export default JobsListPage;