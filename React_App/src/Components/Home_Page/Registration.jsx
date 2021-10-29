import React, {useState} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './HomeCompStyle.css'

const Registration = () => {

    // Form Handler
  const initialState = {fullName:"",email:"", username:"", password:""}
  const [entry, setEntry] = useState(initialState);
  const {fullName, email, username, password} = entry;

  const formChangeHandler = (e) => {
    let name = e.target.name;
    let val = e.target.value;

    setEntry({...entry, [name]: val});
    }

    //create a uniquic id for each registration

    const registerUser = () => {
        axios({
            method: "post",
            data: {
                fullName: fullName,
                email: email,
                username: username,
                password: password,
            },
            withCredentials: true,
            url: 'http://localhost:4000/signup',
        }).then((res) => console.log(res));
    };

    return(
        <>
        <form className='grid-container'>
        <div className='section4'>
        <input
            className=''
            type='text'
            name='fullName'
            placeholder='Full Name'
            onChange={formChangeHandler}/>
        </div>
        <div className='section5'>
        <input
            className=''
            type='text'
            name='email'
            placeholder='Email'
            onChange={formChangeHandler}/> 
        </div>
        <div className='section1'>
        <input
            className='homeUser'
            type='text'
            name='username'
            placeholder='Username'
            onChange={formChangeHandler}/>
        </div>
        <div className='section2'>
        <input
            className='homePass'
            type='text'
            name='password'
            placeholder='Password'
            onChange={formChangeHandler}/> 
        </div>
        <div className='section3'>
        <button className='homeButton' onClick={registerUser}>Register</button>
        </div>                     
        </form> 
    </>
    )
   
}

export default Registration;