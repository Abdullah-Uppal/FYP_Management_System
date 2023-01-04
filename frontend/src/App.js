import React,{useState,useEffect} from 'react';
import Form from './partials/logInSignUp/form';
import {Routes, Route} from 'react-router-dom';

import Dashboard from './pages/dashboard';



function App() {
    const [user, setUser] = useState(JSON.stringify({
        model: '',
        username:''
    }));
    useEffect(() =>{
        const loggedInUser = localStorage.getItem("user");
        if(loggedInUser !== null){
            setUser(loggedInUser);
        }
        
    },[])




  return (

        <Routes>
            <Route index path='*' element={<Dashboard user={user}/>} />
            <Route exact path="/login" element={<Form str={'Login'} setUser={setUser} />} />
            <Route exact path="/signup" element={<Form str={'Sign Up'} />} />
        </Routes>
   
  )
}

export default App