import { Box, Toolbar } from '@mui/material';
import * as React from 'react';
import Nav from '../common/Sidebar';
import Header from '../common/header';
import { Outlet } from 'react-router-dom';
import colorConfig from '../../configs/colorConfig';
import sizeConfig from '../../configs/sizeConfig';

const MainLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Nav value={true} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { xs: `calc(${window.innerWidth} - 60)px`, sm: `calc(100% - ${sizeConfig.sidebar.width})px` },
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
