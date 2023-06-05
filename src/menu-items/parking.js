// assets
import DriveEtaOutlinedIcon from '@mui/icons-material/DriveEtaOutlined';
import DoorBackOutlinedIcon from '@mui/icons-material/DoorBackOutlined';
import { IconPencil } from '@tabler/icons';

// constant
const icons = {
    DriveEtaOutlinedIcon, DoorBackOutlinedIcon, IconPencil};

// ==============================|| PARKING MENU ITEMS ||============================== //

const parking = {
    id: 'parking',
    title: 'Parking',
    type: 'group',
    children: [
      {
            id: 'vehicles',
            title: 'Vehicles',
            type: 'collapse',
            icon: icons.DriveEtaOutlinedIcon,
      
            children: [
              {
                id: 'add-new-car',
                title: 'Ajouter Noveau Vehicle',
                type: 'item',
                url: '#',
                target: true
              }
            ]
      },
      {
        id: 'ports',
        title: 'Ports',
        type: 'collapse',
        icon: icons.DoorBackOutlinedIcon,
        children: [
          {
            id: 'view-live-door',
            title: 'Online Ports',
            type: 'item',
            url: '#',
            breadcrumbs: false
          }
        ]
      },
      {
        id: 'reservation',
        title: 'Reservation',
        type: 'item',
        url: '#',
        icon: icons.IconPencil,
        breadcrumbs: false
      },
    ]
  };
  
  export default parking;
  