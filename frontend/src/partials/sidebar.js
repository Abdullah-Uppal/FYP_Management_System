import React, { useState, useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import DashboardMenu from './sidebar/sideMenu/dashboardMenu';
import PersonMenu from './sidebar/sideMenu/personMenu';
import AllocationMenu from './sidebar/sideMenu/allocationMenu';
import SidebarLinkGroup from './sidebar/sideMenu/sidebarLinkGroup';
import GroupMenu from './sidebar/sideMenu/groupMenu';
import FormatUploaderMenu from './sidebar/sideMenu/formatUploaderMenu';
import ProjectIdeas from './sidebar/sideMenu/projectIdeas';
import MeetingMenu from './sidebar/sideMenu/meetingMenu';
import MilestoneMenu from './sidebar/sideMenu/milestoneMenu';



const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
    const location = useLocation();
    const { pathname } = location;

    const trigger = useRef(null);
    const sidebar = useRef(null);

    const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
    const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true');

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }) => {
            if (!sidebar.current || !trigger.current) return;
            if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
            setSidebarOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!sidebarOpen || keyCode !== 27) return;
            setSidebarOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    useEffect(() => {
        localStorage.setItem('sidebar-expanded', sidebarExpanded);
        if (sidebarExpanded) {
            document.querySelector('body').classList.add('sidebar-expanded');
        } else {
            document.querySelector('body').classList.remove('sidebar-expanded');
        }
    }, [sidebarExpanded]);
    return (
        <div>
            <div
                className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                aria-hidden="true"
            ></div>
            <div
                id="sidebar"
                ref={sidebar}
                className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'
                    }`}
            >
                <div className="flex justify-between mb-10 pr-3 sm:px-2">
                    {/* Close button */}
                    <button
                        ref={trigger}
                        className="lg:hidden text-slate-500 hover:text-slate-400"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        aria-controls="sidebar"
                        aria-expanded={sidebarOpen}
                    >
                        <span className="sr-only">Close sidebar</span>
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
                        </svg>
                    </button>
                    {/* Logo */}
                    <NavLink end to="/" className="block">
                        <div className='w-full flex justify-between align-middle items-center flex-wrap'>
                            <svg width="32" height="32" viewBox="0 0 32 32">
                                <defs>
                                    <linearGradient x1="28.538%" y1="20.229%" x2="100%" y2="108.156%" id="logo-a">
                                        <stop stopColor="#A5B4FC" stopOpacity="0" offset="0%" />
                                        <stop stopColor="#A5B4FC" offset="100%" />
                                    </linearGradient>
                                    <linearGradient x1="88.638%" y1="29.267%" x2="22.42%" y2="100%" id="logo-b">
                                        <stop stopColor="#38BDF8" stopOpacity="0" offset="0%" />
                                        <stop stopColor="#38BDF8" offset="100%" />
                                    </linearGradient>
                                </defs>
                                <rect fill="#6366F1" width="32" height="32" rx="16" />
                                <path d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z" fill="#4F46E5" />
                                <path
                                    d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z"
                                    fill="url(#logo-a)"
                                />
                                <path
                                    d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z"
                                    fill="url(#logo-b)"
                                />
                            </svg>
                            <h1 className='text-white ml-5 lg:hidden 2xl:absolute lg:sidebar-expanded:block 2xl:block'>FYP-MANAGEMENT</h1>
                        </div>
                    </NavLink>

                </div>
                <div className="space-y-8">
                    {/* Pages group */}
                    <div>
                        <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
                            <span className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">
                                •••
                            </span>
                            <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">Pages</span>
                        </h3>
                        <ul className="mt-3">
                            {/* Dashboard */}
                            <SidebarLinkGroup activecondition={pathname === '/' || pathname.includes('dashboard')}>
                                {(handleClick, open) => {
                                    return (
                                        <DashboardMenu handleClick={handleClick} open={open} sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} />
                                    );
                                }}
                            </SidebarLinkGroup>
                            <SidebarLinkGroup activecondition={pathname === '/persons' || pathname.includes('persons')}>
                                {(handleClick, open) => {
                                    return (
                                        <PersonMenu handleClick={handleClick} open={open} sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} />
                                    );
                                }}
                            </SidebarLinkGroup>
                            <SidebarLinkGroup activecondition={pathname === '/allocation' || pathname.includes('allocation')}>
                                {(handleClick, open) => {
                                    return (
                                        <AllocationMenu handleClick={handleClick} open={open} sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} />
                                    );
                                }}
                            </SidebarLinkGroup>
                            <SidebarLinkGroup activecondition={pathname === '/group' || pathname.includes('group')}>
                                {(handleClick, open) => {
                                    return (
                                        <GroupMenu handleClick={handleClick} open={open} sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} />
                                    );
                                }}
                            </SidebarLinkGroup>
                            <SidebarLinkGroup activecondition={pathname === '/uploadformat' || pathname.includes('uploadformat')}>
                                {(handleClick, open) => {
                                    return (
                                        <FormatUploaderMenu handleClick={handleClick} open={open} sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} />
                                    );
                                }}
                            </SidebarLinkGroup>
                            <SidebarLinkGroup activecondition={pathname === '/projects' || pathname.includes('projects')}>
                                {(handleClick, open) => {
                                    return (
                                        <ProjectIdeas handleClick={handleClick} open={open} sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} />
                                    );
                                }}
                            </SidebarLinkGroup>
                            <SidebarLinkGroup activecondition={pathname === '/meetings' || pathname.includes('meetings')}>
                                {(handleClick, open) => {
                                    return (
                                        <MeetingMenu handleClick={handleClick} open={open} sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} />
                                    );
                                }}
                            </SidebarLinkGroup>
                            <SidebarLinkGroup activecondition={pathname === '/milestone' || pathname.includes('milestone')}>
                                {(handleClick, open) => {
                                    return (
                                        <MilestoneMenu handleClick={handleClick} open={open} sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} />
                                    );
                                }}
                            </SidebarLinkGroup>
                        </ul>
                    </div>
                </div>
                {/* Expand / collapse button */}
                <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
                    <div className="px-3 py-2">
                        <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
                            <span className="sr-only">Expand / collapse sidebar</span>
                            <svg className="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
                                <path className="text-slate-400" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z" />
                                <path className="text-slate-600" d="M3 23H1V1h2z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar