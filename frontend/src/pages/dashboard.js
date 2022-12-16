import React, { useState } from 'react'
import Sidebar from '../partials/sidebar'
import WelcomeBanner from '../partials/dashboard/welcomeBanner'
import Header from '../partials/header'
import Persons from '../partials/dashboard/persons'
import PersonDetails from '../partials/dashboard/personDetails'

import {
    Routes,
    Route,
    Navigate
} from 'react-router-dom';
import SupervisorAllocation from './SupervisorAllocation'

const Dashboard = ({user,setIsLoggedIn}) => {


    const [sidebarOpen, setSidebarOpen] = useState(false);
    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    return (

        !isLoggedIn ? <Navigate replace to="/login" /> :

        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                <Header user={user} loggedIn={setIsLoggedIn} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <main>
                    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

                        {/* Welcome banner */}
                        <Routes>

                            <Route exact path="/addperson" element={<Persons />} />
                            <Route exact path="/persons" element={<PersonDetails/>} />
                            <Route exact path="/meetings" element={<h1>Meetings</h1>} />
                            <Route exact path="/login" element={<h1>Login</h1>} />

                            <Route exact path="/allocation" element ={<SupervisorAllocation/>}/>


                            <Route exact path="/" element={<WelcomeBanner user={user} />} />
                            <Route exact path="/projects/" element={<h1>Projects</h1>} />
                            <Route exact path="/meetings/" element={<h1>Meetings</h1>} />

                        </Routes>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Dashboard