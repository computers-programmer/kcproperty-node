import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Sidebar from './Sidebar';
import NavBar from './NavBar';

import InsertDriveFileRoundedIcon from '@mui/icons-material/InsertDriveFileRounded';

function Maintenance() {

    const [fName, setFname] = useState('');
	const [lName, setLname] = useState('');
	const [email, setEmail] = useState('');
	const [tel, setTel] = useState('');
	const [bio, setBio] = useState('');
	const [address, setAddress] = useState('');
	const [message, setMessage] = useState('')
	const [error, setError] = useState(false)
	const [success, setSuccess] = useState(false)

	// Error states for each field
	const [fieldError, setFieldError] = useState({
		fName: '',
		lName: '',
		email: '',
		tel: '',
		bio: '',
		address: '',
	});

	const validateFields = () => {
		let fieldErrors = {};
	
		// Validate fName
		if (!fName) {
		  	fieldErrors.fName = 'First name is required.';
		}
	
		// Validate lName
		if (!lName) {
		  	fieldErrors.lName = 'Last name is required.';
		}
	
		// Validate email (simple pattern check)
		if (!email) {
		  	fieldErrors.email = 'Email is required.';
		} else if (!/\S+@\S+\.\S+/.test(email)) {
		//   fieldErrors.email = 'Please enter a valid email address.';
		}
	
		// Validate tel (assuming phone number must be numeric and non-empty)
		if (!tel) {
		  	fieldErrors.tel = 'Phone number is required.';
		} else if (!/^\d+$/.test(tel)) {
		//   fieldErrors.tel = 'Phone number must be numeric.';
		}
	
		// Validate bio
		if (!bio) {
			fieldErrors.bio = 'Bio is required.';
		}
	
		// Validate address
		if (!address) {
		  	fieldErrors.address = 'Address is required.';
		}
	
		return fieldErrors;
	};
	 
	const handelFname = (e) => {
		setFname(e.target.value);
	}
	const handelSubmit = async (e) => {
		e.preventDefault();
		
		// Perform field validation
		const validationErrors = validateFields();

		// Check if there are any validation errors
		if (Object.keys(validationErrors).length > 0) {
			setError(true);
			setMessage('All field value must');
			setFieldError(validationErrors);
			return; // Stop submission if there are errors
		} else {
			setError(false);
			setMessage('');
		}

		try {
			const response = await axios.post('http://localhost:5000/api/admin/userAdd', {
	        	fName, lName, email, tel, bio, address
	      	});
			setSuccess(true);
			setMessage(`Tenant add successful! ${fName} ${lName}`)
		} catch (error) {
			setError(true);
			setMessage(error.response.data.message || 'Error in submission');
		}
	}

    return (
		<>
            <div className="container-fluid">
	    		<div className="row">

	    			<Sidebar />

	    			<div className="col-md-10 p-0 bg-white">

	    				<NavBar title="Submit Work Order Request" backArrow={true} />

                        <div className="px-4" style={{ marginTop: '-50px'}}>
							<div className="row">
								<div className="col-md-8 pe-0">
									<div className="card shadow border-0">
		                        		<div className="card-body px-4">
		                        			<h5>Request Information</h5>
		                        			<div>
												{error ? (<div className="alert alert-danger" role="alert"> &#128520; {message} &#128545; </div> ) : null }
												{success ? (<div className="alert alert-info" role="alert"> &#128526; {message} &#128522; </div>) : null }
		                        				<form className="row g-3" onSubmit={handelSubmit}>
		                        					<div className="col-md-6">
												    	<label htmlFor="fName" className="form-label">Requester*</label>
												    	<input 
															type="text" 
															className="form-control" 
															id="fName" 
															placeholder="Enter first name"
															value={fName}
															onChange={handelFname}
														/>
        												{fieldError.fName && <div className="text-danger">{fieldError.fName}</div>}
												  	</div>
												  	<div className="col-md-6">
												    	<label htmlFor="lName" className="form-label">Request Type</label>
												    	<input 
															type="text" 
															className="form-control" 
															id="lName" 
															placeholder="Enter last name"
															value={lName}
															onChange={(e) => setLname(e.target.value)}
														/>
														{fieldError.lName && <div className="text-danger">{fieldError.lName}</div>}
												  	</div>
												  	<div className="col-md-6">
												    	<label htmlFor="email" className="form-label">Request Status</label>
												    	<input 
															type="email" 
															className="form-control" 
															id="email" 
															placeholder="Enter email"
															value={email}
															onChange={(e) => setEmail(e.target.value)}
														/>
														{fieldError.email && <div className="text-danger">{fieldError.email}</div>}
												  	</div>
												  	<div className="col-md-6">
												    	<label htmlFor="tel" className="form-label">Cost</label>
												    	<input 
															type="tel" 
															className="form-control" 
															id="tel" 
															placeholder="Enter phone number"
															value={tel}
															onChange={(e) => setTel(e.target.value)}
														/>
														{fieldError.tel && <div className="text-danger">{fieldError.tel}</div>}
												  	</div>
												  	<div className="col-md-6">
												    	<label htmlFor="address" className="form-label">Assign Contractor</label>
												    	<input 
															type="text"
															className="form-control" 
															id="address" 
															placeholder="Enter address"
															value={address}
															onChange={(e) => setAddress(e.target.value)}
														/>
														{fieldError.address && <div className="text-danger">{fieldError.address}</div>}
												  	</div>
												  	<div className="col-md-6">
												    	<label htmlFor="bio" className="form-label">Property</label>
												    	<input 
															type="text" 
															className="form-control" 
															id="bio" 
															placeholder="Enter bio"
															value={bio}
															onChange={(e) => setBio(e.target.value)}
														/>
														{fieldError.bio && <div className="text-danger">{fieldError.bio}</div>}
												  	</div>
                                                      <div className="col-md-6">
												    	<label htmlFor="" className="form-label">Unit</label>
												    	<input 
															type="text" 
															className="form-control" 
															id="" 
															placeholder="Enter bio"
															value={bio}
						
														/>
														{fieldError.bio && <div className="text-danger">{fieldError.bio}</div>}
												  	</div>
                                                      <div className="col-md-6">
												    	<label htmlFor="bio" className="form-label">Description</label>
												    	<input 
															type="text" 
															className="form-control" 
															id="" 
															placeholder="Enter bio"
															value={bio}
									
														/>
														{fieldError.bio && <div className="text-danger">{fieldError.bio}</div>}
												  	</div>
													<input type='submit' value="submit" />
		                        				</form>
		                        			</div>
		                        		</div>
		                        	</div>
								</div>
								<div className="col-md-4">
									<div className="card shadow border-0">
		                        		<div className="card-body px-3">
		                        			<div className="d-flex">
		                        				<InsertDriveFileRoundedIcon />
		                        				<h5>Attachments</h5>
		                        			</div>
		                        			<p className="colorLightGray">Upload relevant documents or photos</p>
		                        		</div>
		                        	</div>
								</div>
							</div>
                            <div className="row mt-4">
                                <div className="col pe-0">
                                    <div className="card shadow border-0">
                                        <div className="card-body px-4">
                                            <div>
                                                <InsertDriveFileRoundedIcon />
                                                <h5>Invoices</h5>
                                            </div>
                                            <div>
                                                <p>No Invoices Yet</p>
                                                <button>Add Invoice</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
						</div>
                        <div>
                            <button>Submit Request</button>
                        </div>
                        <br/><br/><br/>
                    </div>
	    		</div>
	    	</div>
        </>
    );
}

export default Maintenance;