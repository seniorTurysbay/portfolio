import React from "react";
import HomeIcon from '@material-ui/icons/Home';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import PermMediaIcon from '@material-ui/icons/PermMedia';

export const SidebarData = [
    {
        title:"Home",
        icon:<HomeIcon/>,
        link:"/home"
    },
    {
        title:"Mailbox",
        icon:<AlternateEmailIcon/>,
        link:"/mailbox"
    },
    {
        title:"Dashboard",
        icon:<DashboardIcon/>,
        link:"/dashboard"
    },
    {
        title:"Contacts",
        icon:<ImportContactsIcon/>,
        link:"/contacts"
    },
    {
        title:"Images",
        icon:<PermMediaIcon/>,
        link:"/images"
    }
]

