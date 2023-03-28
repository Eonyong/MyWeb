import * as React from 'react';
import Drawer from '@mui/material/Drawer';
// import Box from '@mui/material/Box';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import { useNavigate } from 'react-router-dom';
import appRoutes from '../../routes/appRoutes';
import { Avatar, List, Stack, Toolbar } from '@mui/material';
import { RouteType } from '../../routes/config';
import sizeConfig from '../../configs/sizeConfig';
import colorConfig from '../../configs/colorConfig';
import SidebarItem from './SidebarItem';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface Props {
  value: boolean;
}

const Nav = (props: Props) => {
  // const navigate = useNavigate();
  const { value } = props;

  const [state, setState] = React.useState({
    left: false,
  });

  React.useEffect(() => {
    setState({
      left: value,
    });
  }, [value]);

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // const list = (anchor: Anchor) => (
  //   <Box
  //     component="div"
  //     sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : sizeConfig.sidebar.width, flexShrink: 0 }}
  //     onClick={toggleDrawer(anchor, false)}
  //     onKeyDown={toggleDrawer(anchor, false)}
  //   >
  //     <img src="/images/AppIcon.png" style={{ width: '100%' }} />
  //     <List disablePadding>
  //       {['problems'].map((text, index) => (
  //         <ListItem key={index} disablePadding>
  //           <ListItemButton onClick={() => navigate(`${text}`)}>
  //             <ListItemText primary={text} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //   </Box>
  // );

  return (
    <>
      {(['left'] as const).map((anchor: 'left') => (
        <Drawer
          key={anchor}
          sx={{
            width: sizeConfig.sidebar.width,
            '& .MuiDrawer-paper': {
              width: sizeConfig.sidebar.width,
              boxSizing: 'border-box',
              borderRight: '0px',
              backgroundColor: colorConfig.sidebar.hoverBg,
            },
          }}
          anchor={anchor}
          variant="permanent"
          open={state[anchor]}
          onClose={() => {
            toggleDrawer(anchor, false);
          }}
        >
          <List disablePadding>
            <Toolbar>
              <Stack sx={{ width: '100%' }} direction="row" alignItems="center" justifyContent="center">
                <Avatar src="src/assets/images/AppIcon.png" />
              </Stack>
            </Toolbar>
            {appRoutes.map((route: RouteType, index: number) =>
              route.sidebarProps ? <SidebarItem item={route} key={index} /> : null
            )}
          </List>
        </Drawer>
      ))}
    </>
  );
};

export default Nav;
