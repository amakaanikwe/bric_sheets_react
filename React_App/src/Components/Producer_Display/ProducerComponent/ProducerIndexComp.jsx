import React, { useState, useEffect } from 'react';
import ProducerComp from "./ProducerComp.jsx"
import data from "../../../data/data.json";
import '../../../App.css';

const ProducerIndexComp = () =>{

      const [producers, setProducers] = useState();
      const [loading, setLoading] = useState(false);
      const [currentPage, setCurrentPage] = useState(1);
      const [postsPerPage, setPostsPerPage] = useState(10);

    // get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    return (
      <>
        <header>
          <h1>Producer Search</h1>
        </header>
        <section>
          <ProducerComp producers={currentPosts} />
        </section>
      </>
    );
}
export default ProducerIndexComp;