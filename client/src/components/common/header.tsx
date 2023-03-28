import * as React from 'react';
import { useState } from 'react';
import { AppBar, Box, IconButton, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NotificationsOutlined, Person3Outlined, SearchOutlined } from '@mui/icons-material';
import sizeConfig from '../../configs/sizeConfig';
import colorConfig from '../../configs/colorConfig';

export default function Header() {
  const [value, setValue] = useState(false);

  const handleClick = () => {
    setValue(!value);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${sizeConfig.sidebar.width})`,
          ml: sizeConfig.sidebar.width,
          boxShadow: 'unset',
          backgroundColor: colorConfig.header.bg,
          color: colorConfig.header.color,
          flexDirection: 'row',
        }}
      >
        <IconButton
          sx={{
            mr: 1,
            color: 'text.primary',
            md: 'none',
          }}
          onClick={() => handleClick()}
        >
          <MenuIcon />
        </IconButton>
        <IconButton
          sx={{
            mr: 1,
            color: 'text.primary',
          }}
        >
          <SearchOutlined />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 1,
            sm: 2,
            md: 3,
            lg: 4,
          }}
          sx={{
            mr: 2,
          }}
        >
          <NotificationsOutlined />
          <Person3Outlined />
        </Stack>
      </AppBar>
    </Box>
  );
}
