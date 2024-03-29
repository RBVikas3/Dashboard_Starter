import React from 'react'
import './Sidebar.css'
import logo from "../../imgs/logo.png"
import { SidebarData } from '../../Data/Data'
import { UilSignOutAlt } from '@iconscout/react-unicons'
const Sidevbar = () => {

    return (

        <div className="sidebar">
            <div className="logo">
                <img src={logo} alt="" />
                <span>
                    Sh<span>o</span>ps
                </span>
            </div>
            <div className="menu">
                {SidebarData.map((item, index) => {
                    return (

                        <div className='menuItem'

                            key={index}
                        >
                            <item.icon />

                            <span>
                                {item.heading}
                            </span>
                        </div>
                    )
                })

                }
                <div className="menuItem">
                    <UilSignOutAlt />
                </div>

                {/* <div className="menuItem">
                    <div>
                        <UilEstate />
                    </div>
                    <span>Dashboard</span>
                </div> */}
            </div>
        </div>
    )
}

export default Sidevbar