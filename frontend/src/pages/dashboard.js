import React, { useState } from 'react'
import Sidebar from '../partials/sidebar'
import WelcomeBanner from '../partials/dashboard/welcomeBanner'
import Header from '../partials/header'
import Page404 from './page404'

import {
    Routes,
    Route,
    Navigate
} from 'react-router-dom';
import SupervisorAllocation from './SupervisorAllocation'
import Student from './person/student'
import Supervisor from './person/supervisor'
import StudentDetail from '../partials/person/studentDetail'
import SupervisorDetail from '../partials/person/supervisorDetail'
import FormatUpload from './formatUpload'
import Formats from './formats'


const Dashboard = ({user}) => {


    const [sidebarOpen, setSidebarOpen] = useState(false);
    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    return (

        !isLoggedIn ? <Navigate replace to="/login" /> :

        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                <Header user={user} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <main>
                    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

                        {/* Welcome banner */}
                        <Routes>

                            <Route exact path="/" element={<WelcomeBanner user={user} />} />
                            <Route exact path="/person/student" element={<Student/>} />
                            <Route exact path="/person/supervisor" element={<Supervisor/>} />
                            <Route exact path="/person/student/new" element={<StudentDetail/>} />
                            <Route exact path="/person/supervisor/new" element={<SupervisorDetail/>} />
                            <Route exact path="/person/student/update/:id" element={<StudentDetail/>} />
                            <Route exact path="/person/supervisor/update/:id" element={<SupervisorDetail/>} />
                            <Route exact path="/meetings" element={<h1>Meetings</h1>} />
                            <Route exact path="/milestone" element={<h1>Milestones</h1>} />

                            <Route exact path="/allocation/groups" element ={<h1>Hello Groups</h1>}/>
                            <Route exact path="/allocation/supervisors" element ={<SupervisorAllocation/>}/>
                            <Route exact path="/allocation/projects" element ={<h1>Hello projects</h1>}/>
                            <Route exact path="/group" element ={<h1>Hello Groups</h1>}/>
                            <Route exact path="/formats" element ={<Formats/>}/>
                            <Route exact path="/formats/upload" element ={<FormatUpload/>}/>
                            <Route exact path="/projects/postIdea" element ={<h1>Hello Post Idea</h1>}/>
                            <Route exact path="/projects/bookIdeas" element ={<h1>Hello Book Ideas</h1>}/>
                            <Route exact path="/*" element ={<Page404/>}/>
                        </Routes>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Dashboard