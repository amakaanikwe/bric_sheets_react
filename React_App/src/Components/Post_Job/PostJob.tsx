import React from 'react';
import PostJobForm from './PostJobForm.jsx';
import Banner from '../ReuseComponents/BannerComp.jsx'

const PostJob = () => (
    <>
    <Banner />
    <section className="container">
      <header className="header">
          <h1 className='form-title'>Post a Job</h1>
      </header>
      <PostJobForm />
    </section>

  </>
)

export default PostJob;