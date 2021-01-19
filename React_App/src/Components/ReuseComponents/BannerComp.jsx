import React from 'react';
import banner from '../Home_Page/warren-wong-pfmaMGZSby4-web.jpg'
import '../../App.css'

const Banner = () => {

    return (
        <>
            <section className='bannerImage'>
                <img  src={banner} alt='film camera banner'/>
            </section>
        </>
    )
}

export default Banner;