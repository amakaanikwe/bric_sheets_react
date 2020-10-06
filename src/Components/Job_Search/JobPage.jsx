import React from 'react';
import samplePosts from './samplePosts';

const JobPage = ({ match }) => {
  const name = match.params.name;
  const job = samplePosts.find(job => job.name === name);

  if (!job) return <h1>Job does not exist!</h1>

  return (
    <>
    <header>
        <h1> {job.title} </h1>
        <p> {job.job_info} </p>
    </header>
  </>
  )

}

export default JobPage;