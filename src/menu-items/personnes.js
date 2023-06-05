// assets
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';

// constant
const icons = {
    GroupOutlinedIcon, SupervisedUserCircleOutlinedIcon
};

// ==============================|| UTILS MENU ITEMS ||============================== //

const personnes = {
  id: 'personnes',
  title: 'Personnes',
  type: 'group',
  children: [
    {
      id: 'employes',
      title: 'Employes',
      type: 'item',
      url: '#',
      icon: icons.GroupOutlinedIcon,
      breadcrumbs: false
    },
    {
      id: 'visitors',
      title: 'Visitors',
      type: 'item',
      url: '/utils/util-color',
      icon: icons.SupervisedUserCircleOutlinedIcon,
      breadcrumbs: false
    }
  ]
};

export default personnes;
