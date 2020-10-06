import React from 'react';
import samplePosts from './samplePosts';
import { Link } from "react-router-dom";

const JobsList = () => (
    <>
    <header>
        <h1>Hello Jobs List!</h1>
        {samplePosts.map((job, key) => (
          <Link key={key} to={`/job/${job.name}`}>
            <h3>{job.title}</h3>
            <p>{job.job_info.substring(0, 50)}...</p>
          </Link>         
        ))}
    </header>
  </>
)

export default JobsList;