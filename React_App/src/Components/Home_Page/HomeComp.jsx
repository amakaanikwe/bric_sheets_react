import React, {useRef} from 'react';
import {TweenMax, Power3} from 'gsap';
import backLogo from './warren-wong-pfmaMGZSby4-web.jpg'


const HomeIndexComp = () => {


    return (
      <>
        <header className="container header">
            <h1>Hello World!</h1>
        </header>
        <secton>
          <div className='hero'>
            <img className='homeImage' src={backLogo} alt='film camera'/>
          </div>
        </secton>
      </>
    );
  
}

export default HomeIndexComp;