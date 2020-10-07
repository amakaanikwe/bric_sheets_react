import React from 'react';
import samplePosts from './samplePosts';
import JobsListComp from '../ReuseComponents/JobsListComp.jsx'
import NotFoundPage from "../Home_Page/NotFoundPage.jsx";

const JobPage = ({ match }) => {
  const name = match.params.name;
  const job = samplePosts.find(job => job.name === name);


  if (!job) return <NotFoundPage />
  
  // Will grab all posts excep the one you are on
  const otherPosts = samplePosts.filter(post => post.name !== name);

  return (
    <>
    <header>
        <h1> {job.title} </h1>
        <p> {job.job_info} </p>
        <h3>Other Posts</h3>
        {/* Shows how to reuse comp using diff prop */}
        <JobsListComp posts={ otherPosts } />
    </header>
  </>
  )

}

export default JobPage;