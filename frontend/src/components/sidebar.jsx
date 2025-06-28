import React from 'react'
import {sidebarData} from './sidebarData.jsx'
import {useNavigate, useLocation } from "react-router-dom"
function Sidebar() {
    const navigate = useNavigate()
    const location = useLocation()

    return(
        <div className='Sidebar'>
            <ul className='SidebarList'>
            {sidebarData.map((val, key)=>{
                    return(<li key={key} 
                        className='text-red-500'
                        id={window.location.pathname == val.link ? "active" :  ""}
                        onClick={()=> navigate(val.link)}>
                        
                        <div>{val.icon}</div>
                        <div>{val.title}</div>
                    </li>);
            })}
        </ul>
        </div>
    )
}

export default Sidebar