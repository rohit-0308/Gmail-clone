import React from 'react'
import '../styles/sidebaroptions.css'

function SideBarOptions({Icon, title, number,selected}) {
    return (
        <div className={`sidebarOption ${selected && "sidebarOption--active"}`}>
            <Icon />
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    )
}

export default SideBarOptions
