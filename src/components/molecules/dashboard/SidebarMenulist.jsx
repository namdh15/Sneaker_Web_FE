// material-ui
import { Typography } from '@mui/material';

// project imports
import menuItems from '../../../constants/menuItems.constant';
import NavbarGroup from '../../atoms/dashboard/NavbarGroup';

// ==============================|| SIDEBAR MENU LIST ||============================== //

const SidebarMenulist = () => {
  const navItems = menuItems.items.map((item) => {
    switch (item.type) {
      case 'group':
        return <NavbarGroup key={item.id} item={item} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  return <>{navItems}</>;
};

export default SidebarMenulist;
