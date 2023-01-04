import React from 'react'
import LoginPage from '../../pages/login';
import SignupPage from '../../pages/signup';
import { Navigate } from "react-router-dom";

const Form = ({ str,setUser}) => {
    
    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
   
    return (
        isLoggedIn  ? <Navigate replace to="/" /> :
        <div className="min-h-full h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 p-5 rounded-xl py-10  shadow-2xl  shadow-slate-800">

                {str === 'Login' ? <LoginPage setUser={setUser} /> : <SignupPage />}
            </div>
        </div>
    )
}

export default Form