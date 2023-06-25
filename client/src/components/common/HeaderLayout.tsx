import * as React from 'react';
import { useState, useRef } from 'react';
import {
  AppBar,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Menu,
  MenuItem,
  Stack,
} from '@mui/material';
import { NotificationsOutlined, Person3Outlined, SearchOutlined } from '@mui/icons-material';
import { GoogleLogin, GithubLogin, EmailSignUp } from './FirebaseLogin';
import colorConfig from '../../configs/colorConfig';

interface AlertDialogProps {
  open: boolean;
  handleClose: () => void;
}

const AlertDialog: React.FC<AlertDialogProps> = ({ open, handleClose }) => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    EmailSignUp(email.current?.value as string, password.current?.value as string);
  };
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{'Use Google'}</DialogTitle>
      <DialogContent>
        <form onSubmit={onSubmit}>
          <div>
            <input id="email" type="email" ref={email} placeholder="Email" />
            <div />
            <input id="password" type="password" ref={password} placeholder="Password" />
          </div>
          <Button type="submit" onClick={handleClose}>
            회원가입
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

const HeaderLayout = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);
  // const email = useRef<HTMLInputElement>(null);
  // const password = useRef<HTMLInputElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openAlert = () => {
    setOpen(true);
  };

  const closeAlert = () => {
    setOpen(false);
  };

  // const emailChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
  //   setEmail(event.target.value);
  // }, []);

  // const passwordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setPassword(event.target.value);
  // };

  // const AlertDialog = () => {
  //   return (
  //     <Dialog
  //       open={open}
  //       onClose={handleClose}
  //       aria-labelledby="alert-dialog-title"
  //       aria-describedby="alert-dialog-description"
  //     >
  //       <DialogTitle id="alert-dialog-title">{'Use Google'}</DialogTitle>
  //       <DialogContent>
  //         <Box component="form" onSubmit={onSubmit}>
  //           <div>
  //             <input id="email" type="email" ref={email} placeholder="Email" />
  //             <div />
  //             <input id="password" type="password" ref={password} placeholder="Password" />
  //           </div>
  //           <Button type="submit" onClick={closeAlert}>
  //             회원가입
  //           </Button>
  //         </Box>
  //       </DialogContent>
  //     </Dialog>
  //   );
  // };

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
        {/* <AlertDialog /> */}
        <AlertDialog open={open} handleClose={closeAlert} />

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
              <MenuItem onClick={openAlert}>EmailSignUp</MenuItem>
            </Menu>
          </>
        </Stack>
      </AppBar>
    </Box>
  );
};
export default HeaderLayout;
