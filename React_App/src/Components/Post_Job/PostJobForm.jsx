import React, {useState} from 'react';

const PostJobForm = () => {

    const initialState = { 
        company:"", 
        phoneNumber:""
    }
    
    const [entry, setEntry] = useState(initialState);
    const {company, phoneNumber} = entry;

   const formChangeHandler = (e) => {
        let name = e.target.name;
        let val = e.target.value;

        if (name ==="phoneNumber") {
            if(!Number(val)) {
                alert("Your phone number must be a number");
            }
        }

        setEntry({...entry, [name]: val});
   }

   const formSubmitHandler = (e) => {
        e.preventDefault();
        alert(`You have submitted a form ${company} ${phoneNumber}`);
   }

   return (
        <>
        <div className="formContainer">
            <form onSubmit={formSubmitHandler}>
                {/* <h1>Hello {username} {age}</h1> */}
                <p>Company:</p>
                        <input
                        type='text'
                        name='company'
                        onChange={formChangeHandler}/> 
                <div className="row">
                    <div className="col-lg-6">
                        <p>Job Title:</p>
                        <input
                            type='text'
                            name='jobTitle'
                            onChange={formChangeHandler}/> 
                    </div>
                    <div className="col-lg-6">
                        <p>Job Type:</p>
                        <input
                        type='text'
                        name='JobType'
                        onChange={formChangeHandler}/>
                    </div>
                </div>
          
             <p>Job Description:</p>
             <div className="row">
                 <div className="col-lg-12">
                    <textarea  
                        className="jobFormTextarea"          
                        type='text'
                        name='jobDetails'
                        onChange={formChangeHandler}>Add text...</textarea>
                 </div>
             </div>
            <h4>Your Contact Info:</h4>

            <div className="row">
                <div className="col-lg-6">
                    <p>Phone:</p>
                    <input
                        type='text'
                        name='phoneNumber'
                        onChange={formChangeHandler}/> 
                </div>
                <div className="col-lg-6">
                    <div className='row'>
                        <div className="col-sm-12">
                        <p>E-Mail:</p>
                        <input
                            type='text'
                            name='email'
                            onChange={formChangeHandler}/>
                        </div>
                        <div className="col-sm-12">
                        <button className='formButton' type="submit">Submit</button>
                        </div>
                    </div>
                             
                </div>
                   
            </div>

                
            </form>
            </div>
        </>

   )
    
}

export default PostJobForm;