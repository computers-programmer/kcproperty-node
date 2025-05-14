// Not In Use
import React, { useState } from 'react
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Typography, Container, InputAdornment  } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const Loginform = () => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        userName,
        password,
      });
      const { token } = response.data;
      localStorage.setItem('token', token);
      setMessage('Login successful!');
      // Redirect to the profile page
      navigate('/profile');
    } catch (error) {
      setMessage(error.response.data.message || 'Error logging in');
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        LOGIN
      </Typography>
      <form onSubmit={handleLogin}>
        <TextField
          label="Email or Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonOutlineIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Enter Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button size="small" color="primary">
          Remember me 
        </Button>
        <Button size="small" color="primary">
          Forgot Password
        </Button>
        <br/>
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
      {message && (
        <Typography variant="body2" color="error" align="center" style={{ marginTop: '1rem' }}>
          {message}
        </Typography>
      )}
    </Container>
  );
};

export default Loginform;
