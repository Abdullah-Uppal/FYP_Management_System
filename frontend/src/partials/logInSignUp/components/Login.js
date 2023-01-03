import { useState } from "react";
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login({setUser}) {
  const [loginState, setLoginState] = useState(fieldsState);
  const [passwordShown, setPasswordShown] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };
  const getRole = async (url, email) => {
    console.log("data fetch first");
    try {
      await axios
        .post(url, { email: email })
        .then((res) => {
            console.log('res',res.data)
            let user = JSON.stringify(res.data)
            setUser(user);
            localStorage.setItem('isLoggedIn',true);
            localStorage.setItem('user',user);
            navigate('/');
            
   
        });
    } catch (error) {
        if(error.response.status === 404){
            alert('User not found');
        }   
      console.log(error.message);
    }
  };
  //Handle Login API Integration here
  const authenticateUser = () => {
    // password:loginState['password']

    const url = "http://localhost:3000/misc/modelType";

    getRole(url, loginState["email"]);
    
    // const data = JSON.parse(localStorage.getItem('user'));
    // console.log('data',data)
    // if((data !== null) && (data.email === loginFields.email && data.password === loginFields.password)){
    //     console.log('Login Success');
    //     localStorage.setItem('isLoggedIn',true);
    //     navigate('/');
    // }else{
    //     console.log('Login Failed');
    // }
    // const endpoint=`https://api.loginradius.com/identity/v2/auth/login?apikey=${apiKey}&apisecret=${apiSecret}`;
    //  fetch(endpoint,
    //      {
    //      method:'POST',
    //      headers: {
    //      'Content-Type': 'application/json'
    //      },
    //      body:JSON.stringify(loginFields)
    //      }).then(response=>response.json())
    //      .then(data=>{
    //         //API Success from LoginRadius Login API
    //      })
    //      .catch(error=>console.log(error))
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="-space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={
              field.type === "password"
                ? passwordShown
                  ? "text"
                  : "password"
                : field.type
            }
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      </div>

      <FormExtra TogglePassword={togglePassword} />
      <FormAction handleSubmit={handleSubmit} text="Login" />
    </form>
  );
}
