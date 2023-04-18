import * as React from 'react';
import { AppBar, Box, IconButton, Stack } from '@mui/material';
import { NotificationsOutlined, Person3Outlined, SearchOutlined } from '@mui/icons-material';
import colorConfig from '../../configs/colorConfig';

export default function Header() {
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
          <IconButton>
            <Person3Outlined />
          </IconButton>
        </Stack>
      </AppBar>
    </Box>
  );
}
