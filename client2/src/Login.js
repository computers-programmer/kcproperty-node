import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Card, CardContent, CardMedia, CardActions, Typography, Button, Box, TextField, Container, InputAdornment, Link } from '@mui/material';

import LockIcon from '@mui/icons-material/Lock';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function Login() {
	
	const [userName, setUserName] = useState('');
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
	      	const { token, userEmail } = response.data;
	      	localStorage.setItem('token', token);
	      	localStorage.setItem('userEmail', userEmail);
	      	setMessage('Login successful!');
	      	// Redirect to the dashboard page
	      	navigate('/dashboard');
	    } catch (error) {
	      	setMessage(error.response.data.message || 'Error logging in');
	    }
	};

	return (
		<>
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
	    						LOGIN
	  						</Typography>
						    <form onSubmit={handleLogin}>
						    	<TextField
						        	label=""
						        	placeholder="Email or Username"
						          	variant="outlined"
						          	fullWidth
						          	margin="normal"
						          	value={userName}
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
						        	placeholder="Enter Password"
						          	type="password"
						          	variant="outlined"
						          	fullWidth
						          	margin="normal"
						          	value={password}
						          	autoComplete="current-password"
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
						        <Box sx={{
							    		display: 'flex',             // Use flexbox to arrange items in a row
							        	justifyContent: 'space-between', // Distribute space between the items, pushing them to the left and right
							        	width: '100%'               // Ensure the container takes full width of its parent
							    	}}
							    >
							        <Typography component="p" color="lightslategray">
							        	<input style={{marginRight: 5}}
								        	type="checkbox" 
								          	name="remember" 
								          	onChange={(e) => setPassword(e.target.value)}
								        /> Remember me 
							        </Typography>
							        <Link href="/forgotPassword" color="lightslategray" underline="hover" style={{ marginLeft: '1rem' }}>
	          							Forgot Password
	        						</Link>
						        </Box>
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
			          		<Link href="/signup" color="rgb(8, 58, 91)" underline="hover" style={{ marginLeft: '1rem' }}>
	              				Sign Up
	            			</Link>
	        			</Typography>
			      	</CardActions>
			    </Card>
			</div>
		</>
	);
}

export default Login;