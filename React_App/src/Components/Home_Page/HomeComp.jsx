import React, {useRef, useEffect} from 'react';
import {TweenMax, TimelineMax, Power3} from 'gsap';
import backLogo from './warren-wong-pfmaMGZSby4-web.jpg'


const HomeIndexComp = () => {
  let heroRef = useRef(null)
  let sliderRef = useRef(null)
  let headlineRef = useRef(null)

  useEffect( ()=>{

  }, []);
// heroRef.style.display='none'


    return (
      <>
        <header className="container header">
            <h1>Hello World!</h1>
          <secton>
            <div className='hero' ref={hero=>{heroRef=hero}} >
              <img className='homeImage' src={backLogo} alt='film camera'/>
              <h1 className='headline' ref={head=>{headlineRef=head}}>Filmmakers' Portal</h1>
              <button>Log In</button>
            </div>
          </secton>
        </header>

        <div className='slider' ref={slide=>{sliderRef=slide}}></div>
        
      </>
    );
  
}

export default HomeIndexComp;