import { useState } from 'react';
import { signupFields } from "../constants/formFields"
import FormAction from "./FormAction";
import Input from "./Input";
import { useNavigate } from "react-router-dom";

const fields=signupFields;
let fieldsState={};

fields.forEach(field => fieldsState[field.id]='');

export default function Signup(){
  const [signupState,setSignupState]=useState(fieldsState);
  const navigate = useNavigate();

  const handleChange=(e)=>setSignupState({...signupState,[e.target.id]:e.target.value});

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(signupState)
    const data = JSON.parse(localStorage.getItem('user'));
    if((data !== null) && (data.email === signupState.email)){
        console.log('Already Registered');
        
    }else{ 
        createAccount()
        
    }
   
   
  }

  //handle Signup API Integration here
  const createAccount=()=>{
    localStorage.setItem('user',JSON.stringify(signupState))
    navigate('/login'); 
  }

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="">
        {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                
                )
            }
          <FormAction handleSubmit={handleSubmit} text="Signup" />
        </div>

         

      </form>
    )
}