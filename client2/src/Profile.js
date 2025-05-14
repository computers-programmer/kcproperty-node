import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { TextField, Button, Container, Typography } from '@mui/material';

import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Profile = () => {
  const [profile, setProfile] = useState({ name: '', email: '', bio: '', address: '', phone: '' });
  const [editMode, setEditMode] = useState(false);

  const navigate = useNavigate();

  // Fetch the profile data from the backend
  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('Unauthorized access. Please log in.');
        navigate('/');
        return;
      }
      const userEmail = localStorage.getItem('userEmail');
      
      try {
        const response = await axios.get('http://localhost:5000/api/profile', {
          headers: { Authorization: `Bearer ${token}` },
          params: {
            userEmail: `${userEmail}`, // Example parameter
          }
        });
        setProfile(response.data.result);
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
    <>
    <div className="container mb-5">
      <div className="row mt-4">
        <div className="col-4">
          <div className="card">
            <img style={{ margin: 'auto', height: '150px', width: '150px' }} className="card-img-top" src="https://img.icons8.com/color/48/user-male-circle--v1.png" alt="user-male-circle--v1" />
            <div className="card-body">
              <h5 className="card-title text-center">{ profile.name }</h5>
              <p className="card-text text-center"> Web. Developer</p>
              <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="card-body text-center">
              <a href="#" className="card-link btn btn-primary">Follow</a>
              <a href="#" className="card-link btn btn-outline-primary">Message</a>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="card" style={{ height: '100%' }}>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <p className="row m-0">
                    <span className="col-4">Name </span>
                    <span className="col-8">{ profile.name }</span>
                  </p>
                </li>
                <li className="list-group-item">
                  <p className="row m-0">
                    <span className="col-4">Email </span>
                    <span className="col-8">{ profile.email }</span>
                  </p>
                </li>
                <li className="list-group-item">
                  <p className="row m-0">
                    <span className="col-4">Phone </span>
                    <span className="col-8">{ profile.phone }</span>
                  </p>
                </li>
                <li className="list-group-item">
                  <p className="row m-0">
                    <span className="col-4">Bio </span>
                    <span className="col-8">{ profile.bio }</span>
                  </p>
                </li>
                <li className="list-group-item">
                  <p className="row m-0">
                    <span className="col-4">Address </span>
                    <span className="col-8">{ profile.name }</span>
                  </p>
                </li>
                <li className="list-group-item">
                  <a href="#" className="card-link btn btn-primary">Edit</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-4">
          <ul className="list-group list-group-flush rounded">
            <li className="list-group-item">
              <p className="d-flex justify-content-between m-0">
                <span> <LanguageIcon style={{ marginRight: '2px' }} /> Website</span><span>http://localhost:3000/profile</span>
              </p>
            </li>
            <li className="list-group-item">
              <p className="d-flex justify-content-between m-0">
                <span> <GitHubIcon style={{ marginRight: '2px' }} /> Github</span><span>Github</span>
              </p>
            </li>
            <li className="list-group-item">
              <p className="d-flex justify-content-between m-0">
                <span> <TwitterIcon style={{ marginRight: '2px' }} /> Twitter</span><span>Twitter</span>
              </p>
            </li>
            <li className="list-group-item">
              <p className="d-flex justify-content-between m-0">
                <span> <InstagramIcon style={{ marginRight: '2px' }} /> Instagram</span><span>Instagram</span>
              </p>
            </li>
            <li className="list-group-item">
              <p className="d-flex justify-content-between m-0">
                <span> <FacebookIcon style={{ marginRight: '2px' }} /> Facebook</span><span>Facebook</span>
              </p>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <ul className="list-group list-group-flush rounded">
            <li className="list-group-item">assignment Project Status</li>
            <li className="list-group-item"> abc
              <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ height: "8px"}}>
                <div className="progress-bar" style={{ width: "50%"}}></div>
              </div>
            </li>
            <li className="list-group-item"> abc
              <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ height: "8px"}}>
                <div className="progress-bar" style={{ width: "50%"}}></div>
              </div>
            </li>
            <li className="list-group-item"> abc
              <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ height: "8px"}}>
                <div className="progress-bar" style={{ width: "50%"}}></div>
              </div>
            </li>
            <li className="list-group-item"> abc
              <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ height: "8px"}}>
                <div className="progress-bar" style={{ width: "50%"}}></div>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <ul className="list-group list-group-flush rounded">
            <li className="list-group-item">assignment Project Status</li>
            <li className="list-group-item"> abc
              <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ height: "8px"}}>
                <div className="progress-bar" style={{ width: "50%"}}></div>
              </div>
            </li>
            <li className="list-group-item">A third item abc
              <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ height: "8px"}}>
                <div className="progress-bar" style={{ width: "50%"}}></div>
              </div>
            </li>
            <li className="list-group-item">A fourth item abc
              <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ height: "8px"}}>
                <div className="progress-bar" style={{ width: "50%"}}></div>
              </div>
            </li>
            <li className="list-group-item">And a fifth one  abc
              <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ height: "8px"}}>
                <div className="progress-bar" style={{ width: "50%"}}></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default Profile;
