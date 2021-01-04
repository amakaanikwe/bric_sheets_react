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
                <p>Job Title:</p>
                <input
                type='text'
                name='username'
                onChange={formChangeHandler}
            />

                <p>Company:</p>
                <input
                type='text'
                name='age'
                onChange={formChangeHandler}
            /> 
                <p>Enter Job Type:</p>
                <input
                type='text'
                name='XXXXX'
                onChange={formChangeHandler}
            /> 

             <p>Enter Job Description:</p>
                <input
                type='text'
                name='details'
                onChange={formChangeHandler}
            /> 

            <h4>Your Contact Info</h4>
            <p>Phone:</p>
                <input
                type='text'
                name='XXXXX'
                onChange={formChangeHandler}
            /> 

             <p>E-Mail:</p>
                <input
                type='text'
                name='XXXXXX'
                onChange={formChangeHandler}
            /> 
                {/* NOTE: Maybe change this to button? */}
                <input type="submit" />
            </form>
        </>

   )
    
}

export default PostJobForm;