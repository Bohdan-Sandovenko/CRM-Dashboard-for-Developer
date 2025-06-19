import React from 'react'
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AlignVerticalCenterIcon from '@mui/icons-material/AlignVerticalCenter';
export const sidebarData = [
    {
        title: "Menu",
        icon: <MenuIcon />,
        link: "/menu "
    },
    {
        title: "Home",
        icon: <HomeFilledIcon />,
        link: "/home "
    },
    {
        title: "Home",
        icon: <AccountCircleIcon />,
        link: "/account "
    },
    {
        title: "Statystic",
        icon: <AlignVerticalCenterIcon />,
        link: "/statystic "
    }
]