import React from 'react';
import './SidebarOption.css';

function SidebarOption({text, Icon, active}) {
    return (
        <div className={`sidebarOption ${active && 'sidebarOption--acvtive'}`}>
            <Icon/>
            <h6>{text}</h6>
        </div>
    );
}

export default SidebarOption;
