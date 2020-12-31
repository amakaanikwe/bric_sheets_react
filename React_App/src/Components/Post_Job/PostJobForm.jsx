import React, {useState} from 'react';

const PostJobForm = () => {

    const initialState = { username:"", age:""}
    const [entry, setEntry] = useState(initialState);
    const {username, age} = entry;

   const formChangeHandler = (e) => {
        let name = e.target.name;
        let val = e.target.value;

        if (name ==="age") {
            if(!Number(val)) {
                alert("Your age must be a number");
            }
        }

        setEntry({...entry, [name]: val});
   }

   const formSubmitHandler = (e) => {
        e.preventDefault();
        alert(`You have submitted a form ${username} ${age}`);
   }

   return (
        <>
            <form onSubmit={formSubmitHandler}>
                <h1>Hello {username} {age}</h1>
                <p>Enter Job Title:</p>
                <input
                type='text'
                name='username'
                onChange={formChangeHandler}
            />
                <p>Job Type:</p>
                <input
                type='text'
                name='age'
                onChange={formChangeHandler}
            /> 
             <p>Job Description:</p>
                <input
                type='text'
                name='details'
                onChange={formChangeHandler}
            /> 
                <input type="submit" />
            </form>
        </>

   )
    
}

export default PostJobForm;