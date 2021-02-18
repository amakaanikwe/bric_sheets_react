import React, {useRef, useEffect} from 'react';
import {TweenMax, TimelineMax, Power3} from 'gsap';
import Login from'./Login.jsx';
import Registration from './Registration.jsx';
import backLogo from './warren-wong-pfmaMGZSby4-web.jpg';
import './HomeCompStyle.css';


const HomeIndexComp = () => {

  let heroRef = useRef(null)
  let sliderRef = useRef(null)
  let headlineRef = useRef(null)
  let homeGridRef = useRef(null)
  const tl = gsap.timeline();

  useEffect( ()=>{
    tl.fromTo(heroRef,1,{height:"0%"}, {height:"80%", ease: Power3.easeInOut})
    .fromTo(heroRef,1.2, {width:'100%'}, {width: '80%', ease: Power3.easeInOut}) 
    .fromTo(sliderRef, 1.2, {x: '-100%'}, {x: '0%', ease: Power3.easeInOut})
    .fromTo(headlineRef, 0.5, {opacity: 0, x:30}, {opacity:1, x:0}, '-=0.5')
    .fromTo(homeGridRef, 0.5, {opacity: 0, x:-30}, {opacity:1, x:0}, '-=0.5')
  }, []);
// heroRef.style.display='none'


    return (
      <>
        <header className="homeCompStyle">
          <section className='homeSection'>

            <div className='hero' ref={hero=>{heroRef=hero}} >
              <img className='homeImage' src={backLogo} alt='film camera'/>
              <div>
                  <h1 className='headline textBorder' ref={head=>{headlineRef=head}}>Filmmaker's Portal</h1>
              </div>
              <div className='homeGrid' ref={grid=>{homeGridRef=grid}} >
              < Login /> 
              {/* < Registration />  */}
              </div>
                           
            </div>

          </section>
        </header>

        <div className='slider' ref={slide=>{sliderRef=slide}}></div>
        
      </>
    );
  
}

export default HomeIndexComp;