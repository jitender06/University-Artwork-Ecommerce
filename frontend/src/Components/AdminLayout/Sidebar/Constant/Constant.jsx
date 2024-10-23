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
            label: 'Products',
            icon: <WorkIcon />,
            to:'/admin/products',
            isSubmenu: false,
        }
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
    ]
}

export default Menus;