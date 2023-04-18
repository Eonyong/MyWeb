import * as React from 'react';
import Drawer from '@mui/material/Drawer';
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

  return (
    <>
      {(['left'] as const).map((anchor: 'left') => (
        <Drawer
          key={anchor}
          sx={{
            width: { xs: `60px`, sm: `${sizeConfig.sidebar.width}px` },
            '& .MuiDrawer-paper': {
              width: { xs: `60px`, sm: `${sizeConfig.sidebar.width}px` },
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
              {window.innerWidth > 600 ? (
                <Stack sx={{ width: '100%' }} direction="row" alignItems="center" justifyContent="center">
                  <Avatar src="src/assets/images/AppIcon.png" />
                </Stack>
              ) : null}
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
