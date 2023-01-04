import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import AdminSection from "./sections/adminSection";
import SidebarLinkGroup from "./sidebar/sideMenu/sidebarLinkGroup";
import DashboardMenu from "./sidebar/sideMenu/dashboardMenu";
import StudentSection from "./sections/studentSection";
import AdvisorSection from "./sections/advisorSection";
import ProjectIdeas from "./sidebar/sideMenu/projectIdeas";


const Sidebar = ({ role, sidebarOpen, setSidebarOpen }) => {
    const location = useLocation();
    const { pathname } = location;

    const trigger = useRef(null);
    const sidebar = useRef(null);

    const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
    const [sidebarExpanded, setSidebarExpanded] = useState(
        storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
    );

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }) => {
            if (!sidebar.current || !trigger.current) return;
            if (
                !sidebarOpen ||
                sidebar.current.contains(target) ||
                trigger.current.contains(target)
            )
                return;
            setSidebarOpen(false);
        };
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!sidebarOpen || keyCode !== 27) return;
            setSidebarOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return () => document.removeEventListener("keydown", keyHandler);
    });

    useEffect(() => {
        localStorage.setItem("sidebar-expanded", sidebarExpanded);
        if (sidebarExpanded) {
            document.querySelector("body").classList.add("sidebar-expanded");
        } else {
            document.querySelector("body").classList.remove("sidebar-expanded");
        }
    }, [sidebarExpanded]);
    return (
        <div>
            <div
                className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                aria-hidden="true"
            ></div>
            <div
                id="sidebar"
                ref={sidebar}
                className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-64"
                    }`}
            >
                <div className="flex justify-between mb-10 pr-3 sm:px-2">
                    {/* Close button */}
                    {/* <button
                        ref={trigger}
                        className="lg:hidden text-slate-500 hover:text-slate-400"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        aria-controls="sidebar"
                        aria-expanded={sidebarOpen}
                    >
                        <span className="sr-only">Close sidebar</span>
                        <svg
                            className="w-6 h-6 fill-current"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
                        </svg>
                    </button> */}
                    {/* Logo */}
                    <NavLink end to="/" className="block">
                        <div className="w-full flex justify-between align-middle items-center flex-wrap">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="200"
                                height="86"
                                viewBox="0 0 200 86"
                            >
                                <defs>
                                    <image
                                        id="img_1"
                                        width="200"
                                        height="86"
                                        xlinkHref="data:image/png;base64,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"
                                    ></image>
                                </defs>
                                <use fill="#FFF" xlinkHref="#img_1"></use>
                            </svg>
                        </div>
                    </NavLink>
                </div>
                <div className="space-y-8">
                    {/* Pages group */}
                    <div>
                        <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
                            <span
                                className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                                aria-hidden="true"
                            >
                                •••
                            </span>
                            <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                                Pages
                            </span>
                        </h3>
                        <ul className="mt-3">
                            {/* Dashboard */}
                            <SidebarLinkGroup
                                activecondition={
                                    pathname === "/" || pathname.includes("dashboard")
                                }
                            >
                                {(handleClick, open) => {
                                    return (
                                        <DashboardMenu
                                            handleClick={handleClick}
                                            open={open}
                                            sidebarExpanded={sidebarExpanded}
                                            setSidebarExpanded={setSidebarExpanded}
                                        />
                                    );
                                }}
                            </SidebarLinkGroup>

                            {role === "Admin" &&

                                <AdminSection
                                    pathname={pathname}
                                    sidebarExpanded={sidebarExpanded}
                                    setSidebarExpanded={setSidebarExpanded}
                                />
                            }
                            {role === "Student" &&
                                <StudentSection
                                    pathname={pathname}
                                    sidebarExpanded={sidebarExpanded}
                                    setSidebarExpanded={setSidebarExpanded}
                                />
                            }
                            {role === "Advisor" &&
                                <AdvisorSection
                                    pathname={pathname}
                                    sidebarExpanded={sidebarExpanded}
                                    setSidebarExpanded={setSidebarExpanded}
                                />
                            }
                            <SidebarLinkGroup
                                activecondition={
                                    pathname === "/project/all" || pathname.includes("projects")
                                }
                            >
                                {(handleClick, open) => {
                                    return (
                                        <ProjectIdeas
                                            handleClick={handleClick}
                                            open={open}
                                            sidebarExpanded={sidebarExpanded}
                                            setSidebarExpanded={setSidebarExpanded}
                                        />
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
                            <svg
                                className="w-6 h-6 fill-current sidebar-expanded:rotate-180"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    className="text-slate-400"
                                    d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
                                />
                                <path className="text-slate-600" d="M3 23H1V1h2z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
