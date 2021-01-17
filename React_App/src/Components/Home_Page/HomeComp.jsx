import React, {useRef} from 'react';
import {TweenMax, Power3} from 'gsap';
import backLogo from './warren-wong-pfmaMGZSby4-web.jpg'


const HomeIndexComp = () => {


    return (
      <>
        <header className="container header">
            <h1>Hello World!</h1>
          <secton>
            <div className='hero'>
              <img className='homeImage' src={backLogo} alt='film camera'/>
              <h1 className='headline'>Filmmakers Portal</h1>
              <button>Enter</button>
            </div>
          </secton>
        </header>

        <div className='slider'></div>
        
      </>
    );
  
}

export default HomeIndexComp;