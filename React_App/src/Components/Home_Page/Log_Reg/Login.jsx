import React, {useState} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './HomeCompStyle.css'

// React:
//useContext, createContext,

//React-Dom
// Redirect
// useHistory
// useLocation

const Login = () => {

// Form Handler
  const initialState = { username:"", password:""}
  const [entry, setEntry] = useState(initialState);
  const {username, password} = entry;
  const formChangeHandler = (e) => {
    let name = e.target.name;
    let val = e.target.value;

    setEntry({...entry, [name]: val});
    }

const loginUser = () => {
    axios({
        method: "get",
        withCredentials: true,
        url: 'http://localhost:4000/signup',
    }).then((res) => console.log(res));

    //Use res to set up contidional logic
};

    return(
        <>
            <form className='grid-container'>

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
                type='password'
                name='password'
                placeholder='Password'
                onChange={formChangeHandler}/> 
            </div>
            <div className='section3'>
            <button className='homeButton' onClick={loginUser}>Log In</button>
            </div>                     
            </form> 

        </>
    )
   
}

export default Login;

