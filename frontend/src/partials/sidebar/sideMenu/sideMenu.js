import React from 'react'
import SideSubMenu from './sideSubMenu';
import { NavLink } from 'react-router-dom';

const Option = ({ title, pathname, open, checkUrl, checkPathName, subMenus }) => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                    <path
                        className={`fill-current text-slate-400 ${(pathname === checkUrl || pathname.includes(checkPathName)) && '!text-indigo-500'
                            }`}
                        d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
                    />
                    <path
                        className={`fill-current text-slate-600 ${(pathname === checkUrl || pathname.includes(checkPathName)) && 'text-indigo-600'}`}
                        d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
                    />
                    <path
                        className={`fill-current text-slate-400 ${(pathname === checkUrl || pathname.includes(checkPathName)) && 'text-indigo-200'}`}
                        d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
                    />
                </svg>
                <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                    {title}
                </span>
            </div>
            {/* Icon */}
            {subMenus.length > 0 &&
                <div className="flex shrink-0 ml-2">
                    <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && 'rotate-180'}`} viewBox="0 0 12 12">
                        <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                    </svg>
                </div>
            }
        </div>
    )
}


const SideMenu = ({ title, pathname, checkUrl, checkPathName, handleClick, open, sidebarExpanded, setSidebarExpanded, subMenus }) => {
    
    return (
        <React.Fragment >
            <div
                className={`block cursor-pointer  text-slate-200 select-none hover:text-white truncate transition duration-150 ${(pathname === checkUrl || pathname.includes(checkPathName)) && 'hover:text-slate-200'
                    }`}
                onClick={(e) => {
                    e.preventDefault();
                    sidebarExpanded ? handleClick() : setSidebarExpanded(!sidebarExpanded);
                }}
            >
                {

                    subMenus.length > 0 ?
                        <Option title={title} pathname={pathname} open={open} checkUrl={checkUrl} checkPathName={checkPathName} subMenus={subMenus} /> :
                        <NavLink to={pathname}>
                            <Option title={title} pathname={pathname} open={open} checkUrl={checkUrl} checkPathName={checkPathName} subMenus={subMenus} />
                        </NavLink>

                }
            </div>
            {subMenus.length > 0 &&
                <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                    <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                        {
                            subMenus.map((subMenu, index) => {
                                return <SideSubMenu key={index} path={subMenu.path} title={subMenu.title} NavLink={NavLink} />
                            })
                        }
                    </ul>
                </div>
            }

        </React.Fragment>
    )
}

export default SideMenu