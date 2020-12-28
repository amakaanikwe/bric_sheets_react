import React, {useState} from 'react';

const PostJobForm = () => {

    const initialState = { username:"", age:""}
    const [entry, setEntry] = useState(initialState);
    const {username, age} = entry;

   const myChangeHandler = (event) => {
        let name = event.target.name;
        let val = event.target.value;
        setEntry({[name]: val});
   }

   return (
        <>
            <form>
            <h1>Hello {username} {age}</h1>
        <p>Enter your name:</p>
        <input
            type='text'
            name='username'
            onChange={myChangeHandler}
        />
        <p>Enter your age:</p>
        <input
            type='text'
            name='age'
            onChange={myChangeHandler}
        /> 
            </form>
        </>

   )
    
}

export default PostJobForm;