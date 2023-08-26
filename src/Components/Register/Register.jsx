import React, { useState } from 'react';
import userStyle from "../User/User.module.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
 
export default function Register() {
  let [errorApi , setErrorApi]= useState('')


    let [userData, setUserData] = useState({
    
      first_name: '',
        email: '',
        password: '',
       
      });
   
    
      let getInputs = (e) => {
        // console.log(e.target.value);
        let copyUser ={...userData}
    
        copyUser[e.target.name] = e.target.value;
        setUserData(copyUser);
        // console.log(userData)
    
    
      }

     async function FunSubmit(e){
      
        e.preventDefault();
        
        
  
    }

  return (
    <div>

    <form onSubmit={FunSubmit}>


{/*  Register */}
<label className={`${userStyle.labelss} d-block`} htmlFor="first_name">Full Name <span>:</span></label>
  <input onChange={getInputs} className={`${userStyle.inputs} d-block mb-3`} id='' type="text" placeholder="Full Name" />
  {/* email */}
   <label className={`${userStyle.labelss}`} htmlFor="email">Email <span>:</span></label>
  <input onChange={getInputs} className={`${userStyle.inputs} d-block mb-3`} type="email" id='email' placeholder="Email" />
{/* p */}
 <label className={`${userStyle.labelss}`} htmlFor="password">Password <span>:</span></label>
  <input onChange={getInputs} className={`${userStyle.inputs} d-block mb-3`}  type="password" id='password' placeholder="Password" />

  <button className={`${userStyle.login} w-100  bg-dark text-white` }>Create New Account </button>
  <div className={`${userStyle.conLine} my-3`}><span className={`${userStyle.line}`}></span><span>or</span>
  <span className={`${userStyle.line}`}></span></div>
  <button className={`${userStyle.Create} w-100  ` } >Login </button>



 </form>
</div>
  )
}
