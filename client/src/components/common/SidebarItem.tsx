import { ListItemButton, ListItemIcon } from '@mui/material';
import { RouteType } from '../../routes/config';
import { useNavigate } from 'react-router-dom';

type Props = {
  item: RouteType;
};

const SidebarItem = ({ item }: Props) => {
  const navigation = useNavigate();
  return item.sidebarProps && item.path ? (
    <ListItemButton onClick={() => navigation(`${item.path}`)}>
      <ListItemIcon>{item.sidebarProps.icon && item.sidebarProps.icon}</ListItemIcon>
      {item.sidebarProps.displayText}
    </ListItemButton>
  ) : null;
};
export default SidebarItem;
