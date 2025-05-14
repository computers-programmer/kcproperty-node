import React from 'react';
import { NavLink } from 'react-router-dom';

import AccountMenu from './AccountMenu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function NavBar(props) {
	return (
		<>
			<div className="pt-2 px-4" style={{ background: '#265270', height: '300px' }}>
				<nav className="navbar justify-content-between">
				  	<form className="form-inline input-icons">
				  		<i className="fas fa-search icon"></i>
				    	<input className="form-control mr-sm-2 placeholderColor input-field" type="search" placeholder="Type in to search" aria-label="Search" style={{ maxWidth: '300px', width: '300px', background: '#265270' }} />
				  	</form>
				  	<AccountMenu />
				</nav>

				{props.backArrow ? ( <ArrowBackIcon sx={{ fontSize: '50px', color: 'white' , marginTop: '30px' }} />) : null}

				<div className="d-flex justify-content-between mt-4">
					<h1 className="text-white fw-bolder"> {props.title} </h1>
					<div>
						{/* Conditionally render the button if props.btnTitle exists */}
						{props.btnTitle ? ( <NavLink to={props.btnTo} className="ms-2 btn btn-light px-5"  style={{ height: '40px' }}> {props.btnTitle} </NavLink> ) : null}
						{props.btn2Title ? ( <NavLink to={props.btn2To} className="ms-2 btn btn-light px-5"  style={{ height: '40px' }}> {props.btn2Title} </NavLink> ) : null}
					</div>
				</div>
			</div>
		</>
	);
}

export default NavBar;