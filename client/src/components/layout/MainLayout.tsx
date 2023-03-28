import { Box, Toolbar } from '@mui/material';
import * as React from 'react';
import Nav from '../common/Navbar';
import sizeConfig from '../../configs/sizeConfig';
import Header from '../common/header';
import { Outlet } from 'react-router-dom';
import colorConfig from '../../configs/colorConfig';

const MainLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Box component="nav" sx={{ width: sizeConfig.sidebar.width, flexShrink: 0 }}>
        <Nav value={true} />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: `calc(100% - ${sizeConfig.sidebar.width})`,
          minHeight: '100vh',
          backgroundColor: colorConfig.header.bg,
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
