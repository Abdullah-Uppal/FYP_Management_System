import React, { useState } from 'react'
import Sidebar from '../partials/sidebar'
import WelcomeBanner from '../partials/dashboard/welcomeBanner'
import Header from '../partials/header'
import {
    Routes,
    Route,
} from 'react-router-dom';
const Dashboard = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <main>
                    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

                        {/* Welcome banner */}

                        <Routes>
                            <Route exact path="/" element={<WelcomeBanner />} />
                            <Route exact path="/projects" element={<h1>Projects</h1>} />
                            <Route exact path="/meetings" element={<h1>Meetings</h1>} />
                            <Route exact path="/login" element={<h1>Login</h1>} />
                        </Routes>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Dashboard