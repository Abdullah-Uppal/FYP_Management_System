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
import StudentsUnderAdvisor from '../partials/studentsUnderAdvisor'
import FormatUpload from '../partials/formatUpload'
import Formats from './formats'
import PostIdea from '../partials/postIdea'
import IdeasList from './ideasList'
import Groups from './person/group/groups'

import Commtiee from './person/committee/committee'
import Milestones from './milestones'
import Department from './department'
import DepartmentDetails from '../partials/department/departmentDetails'
// import DepartmentModel from '../partials/department/departmentModel'
import Meeting from '../partials/meeting'
import Meetings from './meetings'
import FAQ from '../partials/FAQ'
import Evaluation from '../partials/evaluation'
import StudentGroup from './studentGroup';

const Dashboard = ({user}) => {

    
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    return (
        !isLoggedIn ? <Navigate replace to="/login" /> :

        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <Sidebar role={JSON.parse(user).model} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                <Header user={user} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <main>
                    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

                        {/* Welcome banner */}
                        <Routes>

                            <Route exact path="/" element={<WelcomeBanner user={user} />} />
                            <Route exact path="/user/students" element={<Student/>} />
                            <Route exact path="/user/advisors" element={<Supervisor/>} />
                            <Route exact path="/user/groups" element ={<Groups/>}/>
                            <Route exact path="/user/committee" element={<Commtiee/>} />
                            <Route exact path="/user/student/new" element={<StudentDetail/>} />
                            <Route exact path="/user/advisor/new" element={<SupervisorDetail/>} />
                            <Route exact path="/user/student/update/:id" element={<StudentDetail/>} />
                            <Route exact path="/user/advisor/update/:id" element={<SupervisorDetail/>} />
                            <Route exact path="/meeting/new" element={<Meeting/>} />
                            <Route exact path="/meeting/all" element={<Meetings/>} />
                            <Route exact path="/milestone/new" element={<Milestones/>} />
                            <Route exact path="/departments" element={<Department />} />
                            <Route exact path="/department/new" element={<DepartmentDetails />} />
                            <Route exact path="/department/update/:id" element={<DepartmentDetails />} />
                            <Route exact path ="/group" element={<StudentGroup/>}/>
                            <Route exact path="/allocation/groups" element ={<h1>Hello Groups</h1>}/>
                            <Route exact path="/myStudents" element ={<StudentsUnderAdvisor/>}/>
                            <Route exact path="/allocation/supervisors" element ={<SupervisorAllocation/>}/>
                            <Route exact path="/allocation/projects" element ={<h1>Hello projects</h1>}/>
                            <Route exact path="/formats" element ={<Formats/>}/>
                            <Route exact path="/formats/upload" element ={<FormatUpload/>}/>
                            <Route exact path="/project/new" element ={<PostIdea />}/>
                            <Route exact path="/project/all" element ={<IdeasList/>}/>
                            <Route exact path="/evaluation" element ={<Evaluation/>}/>
                            <Route exact path="/faq" element ={<FAQ/>}/>
                            <Route exact path="/*" element ={<Page404/>}/>
                        </Routes>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Dashboard