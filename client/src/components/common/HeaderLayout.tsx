import * as React from 'react';
import { useState } from 'react';
import { AppBar, Box, IconButton, Menu, MenuItem, Stack } from '@mui/material';
import { NotificationsOutlined, Person3Outlined, SearchOutlined } from '@mui/icons-material';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Input } from "@mui/material";
import { GoogleLogin, GithubLogin, EmailSignUp } from './FirebaseLogin';
import colorConfig from '../../configs/colorConfig';



const HeaderLayout = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false);

  const AlertDialog = () => {
    const handleClose = () => {
        setOpen(false);
    };

    const emailChange = (e: React.FormEvent<HTMLInputElement>) => {
      const { currentTarget: { value }, } = e;
      setEmail(value);
    };

    const passwordChange = (e: React.FormEvent<HTMLInputElement>) => {
      const { currentTarget: { value }, } = e;
      setPassword(value);
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      EmailSignUp(email, password);
    };
  
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-decscription"
        >
            <DialogTitle id="alert-dialog-title">
                {"Use Google"}
            </DialogTitle>
            <Box component='form' onSubmit={onSubmit} >
                <DialogContent>
                    <Input id="email" type="email" value={email} onChange={emailChange} />
                    <Input id="password" type="password" value={password} onChange={passwordChange} />
                </DialogContent>
                <DialogActions>
                    <Button type="submit" onClick={handleClose}>회원가입</Button>
                </DialogActions>
            </Box>
        </Dialog>
    )
  }

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
        <AlertDialog />
        <Stack direction="row" alignItems="center" sx={{ mr: 1, color: 'text.primary' }}>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <NotificationsOutlined />
          </IconButton>
          <>
            <IconButton aria-controls="menu-app-bar" aria-haspopup="true" onClick={handleMenu}>
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
              <MenuItem onClick={() => setOpen(true)}>EmailSignUp</MenuItem>
            </Menu>
          </>
          
        </Stack>
      </AppBar>
    </Box>
  );
};
export default HeaderLayout;
