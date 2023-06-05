// assets
import { IconBell, IconCalendarPlus } from '@tabler/icons';
// import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

// constant
const icons = {
    IconCalendarPlus, IconBell, LogoutOutlinedIcon
};

// ==============================|| UTILS MENU ITEMS ||============================== //

const user = {
  id: 'user',
  title: 'User',
  type: 'group',
  children: [
    {
      id: 'calendary',
      title: 'Calendary',
      type: 'item',
      url: '/',
      icon: icons.IconCalendarPlus,
      breadcrumbs: false
    },
    {
      id: 'notification',
      title: 'Notification',
      type: 'item',
      url: '',
      icon: icons.IconBell,
      breadcrumbs: false
    },
    {
      id: 'log-out',
      title: 'Log-Out',
      type: 'item',
      url: '',
      icon: icons.LogoutOutlinedIcon,
      breadcrumbs: false
    }
  ]
};

export default user;
