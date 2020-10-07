import React from 'react';
import JobsListComp from '../ReuseComponents/JobsListComp.jsx'
import samplePosts from './samplePosts';


const JobsListPage = () => (
    <>
    <header>
        <h1>Hello Jobs List!</h1>
        <JobsListComp posts={ samplePosts } />
      
    </header>
  </>
)

export default JobsListPage;