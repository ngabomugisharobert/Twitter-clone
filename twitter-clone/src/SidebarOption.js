import React from 'react';
import './SidebarOption.css';

function SidebarOption({text, Icon, active}) {
    return (
        <div className={`sidebarOption ${active && 'sidebarOption--acvtive'}`}>
            <Icon/>
            <h5>{text}</h5>
        </div>
    );
}

export default SidebarOption;
