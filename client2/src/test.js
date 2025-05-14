import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
	
  	const navigate = useNavigate();
  	
	useEffect(() => {
		localStorage.removeItem('userEmail'); // Remove an item
		localStorage.clear(); // Clear all items
		navigate('/');
		return;
	}, []);
	
	return (<></>);
}

export default Logout;
