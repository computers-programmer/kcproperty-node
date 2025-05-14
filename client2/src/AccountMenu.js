import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import PersonIcon from '@mui/icons-material/Person';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

export default function AccountMenu() {
  const [profile, setProfile] = useState({ name: '', email: '', bio: '' });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  // Fetch the profile data from the backend
  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('Unauthorized access. Please log in.');
        // Redirect to the login page
        navigate('/');
        return;
      }
      const userEmail = localStorage.getItem('userEmail');
      
      try {
        const response = await axios.get('http://localhost:5000/api/profile', {
          headers: { Authorization: `Bearer ${token}` },
          params: {
            userEmail: `${userEmail}`,
          }
        });
        setProfile(response.data.result);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
    fetchProfile();
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (route) => {
    navigate(route); // Navigate to the specified route
    handleClose(); // Close the menu after navigation
  };

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <NotificationsOutlinedIcon sx={{ color: 'white' }} />
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32, mr: 2 }}> U </Avatar>
            <Typography sx={{ color: 'white' }}>{ profile.name }</Typography>
            <KeyboardArrowDownOutlinedIcon sx={{ color: 'white', marginLeft: '10px' }} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem sx={{ color: 'lightslategray' }} onClick={() => handleNavigation('/profile')} currentTarget="profile" color="primary">
          <ListItemIcon><PersonIcon fontSize="small" /></ListItemIcon> My Profile
        </MenuItem>

        <MenuItem sx={{ color: 'lightslategray' }}>
          <ListItemIcon><PersonIcon fontSize="small" /></ListItemIcon> User Management
        </MenuItem>

        <MenuItem sx={{ color: 'lightslategray' }} onClick={() => handleNavigation('/settings')}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>

        <MenuItem sx={{ color: 'lightslategray' }} onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Support
        </MenuItem>

        <Divider />

        <MenuItem sx={{ color: 'lightslategray' }} onClick={() => handleNavigation('/logout')}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
            Log Out
        </MenuItem>
        
      </Menu>
    </React.Fragment>
  );
}
