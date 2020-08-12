import React from 'react';
import './SidebarOption.css';

function SidebarOption({text, Icon, active}) {
    return (
        <div className={`sidebarOption ${active && 'sidebarOption--acvtive'}`}>
            <Icon/>
            <h4>{text}</h4>
        </div>
    );
}

export default SidebarOption;
