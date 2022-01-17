import React from 'react';
import { Link } from "react-router-dom";

const JobsList = ({ posts }) => (
    <>
            {posts.map((job, key) => (
                    <Link key={key} to={`/job/${job.name}`}>
                    <h3>{job.title}</h3>
                    <p>{job.job_info.substring(0, 50)}...</p>
                    </Link>         
                ))}

    </>
);

export default JobsList; 