import React from 'react'
import SideSubMenu from './sideSubMenu';
import { NavLink } from 'react-router-dom';

const Option = ({ title, pathname, open, checkUrl, checkPathName, icon, subMenus }) => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <svg className='shrink-0 w-6 h-6'
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                >
                    <defs>
                        <image
                            id={"icon_"+checkPathName}
                            width="100"
                            height="100"
                            xlinkHref={icon}
                        ></image>
                    </defs>
                    <use fill="#FFF" xlinkHref={"#icon_"+checkPathName}></use>
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


const SideMenu = ({ title, pathname, checkUrl, checkPathName, icon, handleClick, open, sidebarExpanded, setSidebarExpanded, subMenus }) => {

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
                        <Option title={title} pathname={pathname} open={open} checkUrl={checkUrl} checkPathName={checkPathName} icon={icon} subMenus={subMenus} /> :
                        <NavLink to={pathname}>
                            <Option title={title} pathname={pathname} open={open} checkUrl={checkUrl} checkPathName={checkPathName} icon={icon} subMenus={subMenus} />
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