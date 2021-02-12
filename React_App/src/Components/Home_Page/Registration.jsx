import React, {useState} from 'react';
import axios from 'axios';
import './HomeCompStyle.css'

const Registration = () => {

    // Form Handler
  const initialState = { username:"", password:""}
  const [entry, setEntry] = useState(initialState);
  const {username, password} = entry;
  const formChangeHandler = (e) => {
    let name = e.target.name;
    let val = e.target.value;

    setEntry({...entry, [name]: val});
    }

    const register = () => {
        axios({
            method: "post",
            data: {
                username: username,
                password: password,
            },
            withCredentials: true,
            url: 'http://localhost:4000/signup',
        })
    };

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
        <button className='homeButton' onClick={register}>Register</button>
        </div>                     
        </div> 

    </>
    )
   
}

export default Registration;