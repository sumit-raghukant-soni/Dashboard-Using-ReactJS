// Sidebar imports

import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilUsdSquare,
    UilMoneyWithdrawal,
    // UilSignOutAlt,
} from "@iconscout/react-unicons";

import img1 from '../imgs/img1.png';
import img2 from '../imgs/img2.png';
import img3 from '../imgs/img3.png';
import img4 from '../imgs/img4.png';

// Sidebar Data
export const SidebarData = [
    {
        icon : UilEstate,
        heading: "Dashboard",
    },
    {
        icon : UilClipboardAlt,
        heading: "Orders",
    },
    {
        icon : UilUsersAlt,
        heading: "Customers",
    },
    {
        icon: UilPackage,
        heading: "Products",
    },
    {
        icon: UilChart,
        heading: "Analytics",
    },
];

export const CardsData = [
    {
        title: "Sales",
        color: {
            background : "linear-gradient(100deg, #8c00ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value: "25,970",
        png: UilUsdSquare,
        series: [
            {
                name: "Sales",
                data: [31,40,28,51,42,109,100],
            },
        ],
    },
    {
        title: "Revenue",
        color: {
            background : "linear-gradient(100deg, #ff1531 0%, #fc929d 100%)",
            boxShadow: "0px 10px 20px 0px #fdc0c7",
        },
        barValue: 80,
        value: "14,270",
        png: UilMoneyWithdrawal,
        series: [
            {
                name: "Revenue",
                data: [10,100,50,70,80,30,40],
            },
        ],
    },
    {
        title: "Expenses",
        color: {
            background : "linear-gradient(100deg, rgb(255, 157, 0) 0%, rgb(255, 202, 113) 100%)",
            boxShadow: "0px 10px 20px 0px #f9d59b",
        },
        barValue: 60,
        value: "4,970",
        png: UilClipboardAlt,
        series: [
            {
                name: "Expenses",
                data: [10,25,15,30,12,15,20],
            },
        ],
    },

]

export const UpdatesData = [
    {
        img: img1,
        name: "Andrew Thomas",
        noti: "has ordered Apple smart watch 2500mAh battery.",
        time: "25 seconds ago",
    },
    {
        img: img2,
        name: "James Bond",
        noti: "has recieved samsung gadget for charging battery.",
        time: "31 minutes ago",
    },
    {
        img: img3,
        name: "Iron Musk",
        noti: "has ordered Apple smart watch 2500mAh battery.",
        time: "2 hours ago",
    },
    {
        img: img4,
        name: "David Jones",
        noti: "has ordered Boat watch 1500mAh battery.",
        time: "4 hours ago",
    },
];