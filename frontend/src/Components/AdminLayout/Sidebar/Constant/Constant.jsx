import MailIcon from '@mui/icons-material/Mail';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import CategoryIcon from '@mui/icons-material/Category';

const Menus = {
    admin:[
        {
            label: 'Dashboard',
            icon: <DashboardIcon />,
            to:'/admin/dashboard',
            isSubmenu: false,
        },
        {
            label: 'User',
            icon: <PersonIcon />,
            to:'/admin/user',
            isSubmenu: false,
        },
        {
            label: 'Job',
            icon: <WorkIcon />,
            to:'/admin/job',
            isSubmenu: false,
        },
        {
            label: 'Category',
            icon: <CategoryIcon />,
            to:'/admin/category',
            isSubmenu: false,
        },
    ],
    recruiter:[
        {
            label: 'Dashboard',
            icon: <DashboardIcon />,
            to:'/recruiter/dashboard',
            isSubmenu: false,
        },
        {
            label: 'Job',
            icon: <WorkIcon />,
            to:'/recruiter/job',
            isSubmenu: false,
        },
    // {
    //     label: 'Estimate',
    //     icon: <MailIcon sx={{ color: ThemeColor.secondary }} />,
    //     to:'/estimate',
    //     isSubmenu: false,
    // },
    // {
    //     label: 'Mail',
    //     icon: <InboxIcon sx={{ color: ThemeColor.secondary }} />,
    //     to:'/send',
    //     isSubmenu: true,
    //     subMenu:[
    //         {
    //             label: 'Send',
    //             icon: <MailIcon sx={{ color: ThemeColor.secondary }} />,
    //             to:'/send',
    //         },
    //         {
    //             label: 'Received',
    //             icon: <MailIcon sx={{ color: ThemeColor.secondary }} />,
    //             to:'/received',
    //         },
    //     ],
    // },
    // {
    //     label: 'Mail',
    //     icon: <InboxIcon sx={{ color: ThemeColor.secondary }} />,
    //     to:'/send',
    //     isSubmenu: true,
    //     subMenu:[
    //         {
    //             label: 'Send',
    //             icon: <MailIcon sx={{ color: ThemeColor.secondary }} />,
    //             to:'/send',
    //         },
    //         {
    //             label: 'Received',
    //             icon: <MailIcon sx={{ color: ThemeColor.secondary }} />,
    //             to:'/received',
    //         },
    //     ],
    // },
    ]
}

export default Menus;