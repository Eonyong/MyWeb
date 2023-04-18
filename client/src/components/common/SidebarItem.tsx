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
      {window.innerWidth > 600 ? `${item.sidebarProps.displayText}` : null}
    </ListItemButton>
  ) : null;
};
export default SidebarItem;
