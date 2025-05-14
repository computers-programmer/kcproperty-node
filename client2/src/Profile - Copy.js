// Not In Use
import React, { useState, useEffect } from 'react
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Container, Typography } from '@mui/material';

const Profile = () => {
  const [profile, setProfile] = useState({ name: '', email: '', bio: '' });
  const [editMode, setEditMode] = useState(false);

  const navigate = useNavigate();

  // Fetch the profile data from the backend
  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('Unauthorized access. Please log in.');
        // Redirect to the profile page
        navigate('/');
        return;
      }
      
      try {
        const response = await axios.get('http://localhost:5000/api/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
    fetchProfile();
  }, []);

  // Toggle between edit and view modes
  const handleEditToggle = () => setEditMode(!editMode);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  // Save the updated profile to the backend
  const handleSave = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.put('http://localhost:5000/api/profile', profile, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProfile(response.data.profile); // Update with saved profile data
      setEditMode(false); // Exit edit mode
      alert('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Error updating profile. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        User Profile
      </Typography>
      <TextField
        label="Name"
        name="name"
        value={profile.name}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        disabled={!editMode}
      />
      <TextField
        label="Email"
        name="email"
        value={profile.email}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        disabled={!editMode}
      />
      <TextField
        label="Bio"
        name="bio"
        value={profile.bio}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        multiline
        rows={4}
        disabled={!editMode}
      />
      <Button
        onClick={handleEditToggle}
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginTop: '1rem' }}
      >
        {editMode ? 'Cancel' : 'Edit Profile'}
      </Button>
      {editMode && (
        <Button
          onClick={handleSave}
          variant="contained"
          color="secondary"
          fullWidth
          style={{ marginTop: '1rem' }}
        >
          Save Changes
        </Button>
      )}
    </Container>
  );
};

export default Profile;
