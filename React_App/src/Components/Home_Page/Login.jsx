import React, {useState} from 'react';
import './HomeCompStyle.css'

const Login = () => {

    // Form Handler
  const initialState = { username:"", age:""}
  const [entry, setEntry] = useState(initialState);
  const {username, age} = entry;
  const formChangeHandler = (e) => {
    let name = e.target.name;
    let val = e.target.value;

    setEntry({...entry, [name]: val});
    }

    return(
        <>
        <div className='grid-container'>

        <div className='section1'>
        <input
            className='homeUser'
            type='text'
            name='username'
            value='Username'
            onChange={formChangeHandler}/>
        </div>
        <div className='section2'>
        <input
            className='homePass'
            type='text'
            name='password'
            value='Password'
            onChange={formChangeHandler}/> 
        </div>
        <div className='section3'>
        <button className='homeButton'>Log In</button>
        </div>                     
        </div> 

    </>
    )
   
}

export default Login;

