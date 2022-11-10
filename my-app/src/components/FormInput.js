// import "./FormInput.css"
// const FormInput = (props) => {
//     const {label,errorMessage, onchange, id, ...inputProps} = props;
//     return(
//         <div className= "formInput">
//            <label>{label}</label>
//             <input {...inputProps} onchange={onchange}/>
//             <span>{errorMessage}</span>
            
//         </div>
//     )
// }

// export default FormInput;

import React,{useState} from 'react';
import  axios from 'axios';
import {useNavigate } from 'react-router-dom';
//import Display from './Display'
import "./FormInput.css"



 function FormInput() {
  let navigate = useNavigate();
   const [data,setData]=useState({
    name:'',
    email:'',
    password:'',
    mobileNum:'',
    username:''
   })

   
   const {name,email,password,mobileNum,username}=data;
   const changeHandler =e =>{
    setData({...data,[e.target.name]:e.target.value})
   }
   const submitHandler = e=>{
    e.preventDefault(); 
    axios.post('https://ixonotest.herokuapp.com/api/User/submit-profile',data)
    .then(  (response)=>{
      // history.replace("/").
      navigate("/Display");
        
    }).catch((error)=>{
      console.log(error);
    })
    console.log(data);
   }
  return (
    <div className='signup'>
      <form onSubmit={submitHandler}>
        <div>
        <h1>SignUp</h1>
        </div>
        <div>
        <span>Name</span><br/>
        <input type='text' name='name' value={name} onChange={changeHandler}/>
        </div>
        <br/>
        <div>
        <span>Email</span><br/>
        <input type='email' name='email'value={email} onChange={changeHandler}/>
        </div>
        <br/>
        <div>
        <span>Password</span><br/>
        <input type='password' name='password' value={password} onChange={changeHandler}/>
        </div>
        <br/>
        <div>
        <span>MobileNumber</span><br/>
        <input type='number' name='mobileNum' value={mobileNum  } onChange={changeHandler}/>
        </div>
        <br/>
        <div>
        <span>Username</span><br/>
        <input type='username' name='username' value={username} onChange={changeHandler}/>
        </div>
        <br/>
        <button>Submit</button>
      </form>
    </div>
  )
}
export default FormInput;