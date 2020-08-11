import React from 'react';
import "./Sidebar.css";
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import MailOutLlineIcon from '@material-ui/icons/MailOutline'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import PermIdentifyIcon from '@material-ui/icons/PermIdentity'
import ListAltIcon from '@material-ui/icons/ListAlt'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import {Button} from '@material-ui/core'

function Sidebar() {
    return (
        <div className="sidebar">
            


        {/* twitter icon */}

        <TwitterIcon />


        {/* sidebaroptions */}


        <SidebarOption active text="Home" Icon={HomeIcon}/>
        <SidebarOption text="Explore" Icon={SearchIcon}/>
        <SidebarOption text="Notifications" Icon={NotificationsNoneIcon}/>
        <SidebarOption text="Message" Icon={MailOutLlineIcon}/>
        <SidebarOption text="Bookmarks" Icon={BookmarkBorderIcon}/>
        <SidebarOption text="Lists" Icon={ListAltIcon}/>
        <SidebarOption text="Profile" Icon={PermIdentifyIcon}/>
        <SidebarOption text="More" Icon={MoreHorizIcon}/>


        {/* twitte button */}

        <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>

        </div>
    )
}

export default Sidebar;
