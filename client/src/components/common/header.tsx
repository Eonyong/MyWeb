import * as React from 'react';
import { useState } from 'react';
import { AppBar, Box, IconButton, Menu, MenuItem, Stack } from '@mui/material';
import { NotificationsOutlined, Person3Outlined, SearchOutlined } from '@mui/icons-material';
import { GoogleLogin, GithubLogin } from './FirebaseLogin';
import colorConfig from '../../configs/colorConfig';


const Header = () => {
  // const [userData, setUserData] = useState<null | UserCredential>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          width: {
            xs: `calc(${window.innerWidth} - 60)px`,
          },
          ml: `60px`,
          boxShadow: 'unset',
          backgroundColor: colorConfig.header.bg,
          color: colorConfig.header.color,
          flexDirection: 'row',
        }}
      >
        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" alignItems="center" sx={{ mr: 1, color: 'text.primary' }}>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <NotificationsOutlined />
          </IconButton>
          <>
            <IconButton aria-controls="menu-app-bar" aria-aria-haspopup="true" onClick={handleMenu}>
              <Person3Outlined />
            </IconButton>
            <Menu
              id="menu-app-bar"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={GoogleLogin}>GoogleLogin</MenuItem>
              <MenuItem onClick={GithubLogin}>GithubLogin</MenuItem>
            </Menu>
          </>
        </Stack>
      </AppBar>
    </Box>
  );
};
export default Header;
