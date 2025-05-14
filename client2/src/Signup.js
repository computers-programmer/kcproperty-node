import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Card, CardContent, CardMedia, CardActions, Typography, Button, Box, TextField, Container, InputAdornment, Link } from '@mui/material';

import LockIcon from '@mui/icons-material/Lock';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function Signup() {

	const [userName, setUserName] = useState('');
	const [userEmail, setUserEmail] = useState('');
  	const [password, setPassword] = useState('');
  	const [confpassword, setConfPassword] = useState('');
  	const [message, setMessage] = useState('');
  	const navigate = useNavigate();

  	const handleLogin = async (e) => {
	    e.preventDefault();
	    try {
	    	const response = await axios.post('http://localhost:5000/api/signup', {
	        	userName,
	        	password,
	        	userEmail,
	      	});
	      	const { status, message } = response.data;
	      	if (status === 'Failed') {
	      		setMessage(message);
	      	} else {
	      		setMessage('Signup successful!');
		      	navigate('/');
	      	}
	    } catch (error) {
	      	setMessage(error.response.data.message || 'Error logging in');
	    }
	};

	return (
		<div className="App" style={{ padding: '20px', display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
			<Card sx={{ maxWidth: 460, margin: 'auto', boxShadow: 3, borderRadius: 8 }}>
		    	<CardMedia
		        	component="img"
		        	height="80"
		        	image="https://kcoproperties.com/leasegeneration/public/kco-logo.jpg"
		        	alt="leasegeneration"
		      	/>
		      	<CardContent>
	          		<Container maxWidth="xs">
  						<Typography sx={{ fontWeight: 'bold', marginTop: 5, marginBottom: 5 }} variant="h4" component="h1" align="center" color="#414141" gutterBottom>
    						SIGN UP
  						</Typography>
					    <form onSubmit={handleLogin}>
					    	<TextField
					        	label=""
					        	placeholder="Your Full Name"
					          	variant="outlined"
					          	fullWidth
					          	margin="normal"
					          	value={userName}
					          	autoComplete="user-name"
					          	onChange={(e) => setUserName(e.target.value)}
					          	slotProps={{
						        	input: {
						            	startAdornment: (
						              		<InputAdornment position="start">
						                		<PersonOutlineIcon />
						              		</InputAdornment>
						            	),
						          	},
						        }}
					        />
					    	<TextField
					        	label=""
					        	placeholder="Enter Your Email"
					        	type="email"
					          	variant="outlined"
					          	fullWidth
					          	margin="normal"
					          	value={userEmail}
					          	autoComplete="email"
					          	onChange={(e) => setUserEmail(e.target.value)}
					          	slotProps={{
						        	input: {
						            	startAdornment: (
						              		<InputAdornment position="start">
						                		<PersonOutlineIcon />
						              		</InputAdornment>
						            	),
						          	},
						        }}
					        />
					        <TextField
					        	label=""
					        	placeholder="Enter Password"
					          	type="password"
					          	variant="outlined"
					          	fullWidth
					          	margin="normal"
					          	value={password}
					          	autoComplete="new-password"
					          	onChange={(e) => setPassword(e.target.value)}
					          	slotProps={{
						            input: {
						            	startAdornment: (
						              		<InputAdornment position="start">
						                		<LockIcon />
						              		</InputAdornment>
						            	),
						          	},
					          	}}
					        />
					        <TextField
					        	label=""
					        	placeholder="Retype Password"
					          	type="password"
					          	variant="outlined"
					          	fullWidth
					          	margin="normal"
					          	autoComplete="new-password"
					          	value={confpassword}
					          	onChange={(e) => setConfPassword(e.target.value)}
					          	slotProps={{
						            input: {
						            	startAdornment: (
						              		<InputAdornment position="start">
						                		<LockIcon />
						              		</InputAdornment>
						            	),
						          	},
					          	}}
					        />
					        <Box sx={{
					        		display: 'flex',
					        		justifyContent: 'center',
					        	}}
						    >
						        <Button type="submit" variant="contained" style={{marginTop: 30, backgroundColor: '#083A5B', textTransform: 'none', paddingLeft: '70px', paddingRight: '70px', paddingTop: '10px', paddingBottom: '10px'}}>
						        	Login
						        </Button>
					        </Box>
					    </form>
					    {message && (
					        <Typography variant="body2" color="error" align="center" style={{ marginTop: '1rem' }}>
					        	{message}
					        </Typography>
					    )}
					</Container>
		      	</CardContent>
		      	<CardActions 
		      		sx={{
						display: 'flex',
						justifyContent: 'center',
						marginBottom: '25px'
					}}
				>
					<Typography size="small" color="lightslategray">
		          		Don&apos;t have an account? 
		          		<Link href="/" color="rgb(8, 58, 91)" underline="hover" style={{ marginLeft: '1rem' }}>
              				Sign In
            			</Link>
        			</Typography>
		      	</CardActions>
		    </Card>
		</div>
	);
}

export default Signup;