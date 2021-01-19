import React, { useState, useEffect } from 'react';
import ProducerComp from "./ProducerComp.jsx"
import Pagination from "../../ReuseComponents/Pagination.jsx";
import Banner from '../../ReuseComponents/BannerComp.jsx';
import data from "../../../data/data.json";
import '../../../App.css';

const ProducerIndexComp = () =>{

      const [producers, setProducers] = useState();
      const [loading, setLoading] = useState(false);
      const [currentPage, setCurrentPage] = useState(1);
      const [postsPerPage, setPostsPerPage] = useState(5);

    // get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    // change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
      <>
      <Banner />
      <section>
        <header className="producerIndexHeader">
          <h1>Let's Find Your Crew</h1>
        </header>
        
          <ProducerComp producers={currentPosts} />
          <Pagination 
            postsPerPage={postsPerPage} 
            totalPosts={data.length} 
            paginate={paginate}
          />
        </section>
      </>
    );
}
export default ProducerIndexComp;