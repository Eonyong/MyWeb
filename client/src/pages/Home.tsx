import * as React from 'react';

import Header from '../layouts/dashboard/header';
import { Outlet } from 'react-router-dom';
import { Stack } from '@mui/material';

const Home = () => {
  return (
    <Stack spacing={3} height={window.innerHeight}>
      <Header />
      <Outlet />
    </Stack>
  );
};

export default Home;
