import React,{useState,useEffect} from 'react';
import Form from './partials/logInSignUp/form';
import {Routes, Route} from 'react-router-dom';

import Dashboard from './pages/dashboard';
import SupervisorAllocation from './pages/SupervisorAllocation';


function App() {
    const [user, setUser] = useState(null);
    useEffect(() =>{
        const loggedInUser = JSON.parse(localStorage.getItem("user"));
        if(loggedInUser !== null){
            setUser(loggedInUser.username);
        }
        
    },[])




  return (

        <Routes>
            <Route index path='*' element={<Dashboard user={user} setUser={setUser}/>} />
            <Route exact path="/login" element={<Form str={'Login'} setUser={setUser} />} />
            <Route exact path="/signup" element={<Form str={'Sign Up'} />} />
        </Routes>
   
  )
}

export default App