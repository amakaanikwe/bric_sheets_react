import React from 'react';
import JobsListComp from '../ReuseComponents/JobsListComp.jsx'
import samplePosts from './samplePosts';


const JobsListPage = () => (
    <>
    <header>
        <h1>Let's Find You a Job</h1>
        <JobsListComp posts={ samplePosts } />
      
    </header>
  </>
)

export default JobsListPage;