import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface Props {
  value: boolean;
}

const Nav = (props: Props) => {
  const navigate = useNavigate();
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

  const list = (anchor: Anchor) => (
    <Box
      component="div"
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <img src="/images/AppIcon.png" style={{ width: '100%' }} />
      <List>
        {['problems'].map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => navigate(`${text}`)}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {(['left'] as const).map((anchor: 'left') => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            variant={window.innerWidth > 900 ? 'permanent' : 'persistent'}
            open={state[anchor]}
            onClose={() => {
              if (window.innerWidth >= 900) {
                toggleDrawer(anchor, false);
              }
            }}
            sx={{ flexShrink: 0 }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Nav;
