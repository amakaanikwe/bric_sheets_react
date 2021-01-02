import React from 'react';
import JobsListComp from '../ReuseComponents/JobsListComp.jsx'
import samplePosts from './samplePosts';


const JobsListPage = () => (
    <>
    <section className="container">
      <header className="header">
          <h1>Let's Find Your Next Job</h1>
          
      </header>
      <JobsListComp  posts={ samplePosts } />
    </section>

  </>
)

export default JobsListPage;