import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

import Sidebar from './Sidebar';
import HeaderCard from './HeaderCard';
import TenantsTable from './TenantsTable';
import NavBar from './NavBar';
import Pagination from './Pagination';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

function Tenants() {

	const [userListing, setUserListing] = useState([]);
  	const [currentPage, setCurrentPage] = useState(1);
  	const [totalPages, setTotalPages] = useState(1);
  	const [limit, setLimit] = useState(2); // Number of users per page
  	const [search, setSearch] = useState('');

	const navigate = useNavigate();

	useEffect(() => {
	    const fetchProfile = async () => {
	      	const token = localStorage.getItem('token');
	      	if (!token) {
	        	alert('Unauthorized access. Please log in.');
	        	// Redirect to the login page
	        	navigate('/');
	        	return;
	      	}
	      
	      	try {
	        	const response = await axios.get(`http://localhost:5000/api/userList?page=${currentPage}&limit=${limit}&search=${search}`, {
	         		headers: { Authorization: `Bearer ${token}` },
	        	});
	        	setUserListing(response.data.result);
          		setTotalPages(response.data.totalPages);
	      	} catch (error) {
	        	console.error('Error fetching profile:', error);
	      	}
	    };
	    fetchProfile();
	}, [currentPage, limit, search]); // Fetch data when currentPage or limit changes

	const handleNextPage = () => {
	    if (currentPage < totalPages) {
	    	setCurrentPage(currentPage + 1);
	    }
	};

  	const handlePrevPage = () => {
    	if (currentPage > 1) {
      		setCurrentPage(currentPage - 1);
    	}
  	};

  	const handlePageChange = (pageNumber) => {
    	setCurrentPage(pageNumber);
  	};

  	// Create an array of page numbers to render
  	// const pageNumbers = [];
  	// for (let i = 1; i <= totalPages; i++) {
    // 	pageNumbers.push(i);
  	// }

  	const handleChangeLimit = (event) => {
		setCurrentPage(1);
    	setLimit(event.target.value);
  	};

  	const handleSearch = (event) => {
  		setCurrentPage(1);
    	setSearch(event.target.value);
  	};

	return (
		<>
			<div className="container-fluid myCss">
	    		<div className="row">

	    			<Sidebar />

	    			<div className="col-md-10 p-0 bg-white">

	    				<NavBar title="Tenants" btnTitle="Add Tenant" />

						<div className="px-4" style={{ marginTop: '-85px'}}>
							<div className="row">
								<HeaderCard heading="NEW TENANTS" btnText="+15%" count="19" btnColor="#083A5B" />
								<HeaderCard heading="EXPIRING LEASES" btnText="-34%" count="03" btnColor="#eda90fd6" />
								<HeaderCard heading="LATE RENT" btnText="+25%" count="05" btnColor="#cd4141eb" />
							</div>
						</div>

						<div className="px-4 mt-3">
							<div className="row">
								<div className="col-md-12">
									<div className="card shadow border-0">
		                        		<div className="card-body px-5">
		                        			<div className="d-flex justify-content-between">
		                        				<div>
		                        					<h3>Tenants</h3>
		                        					<p className="colorLightGray">Complete list of all tenants</p>
		                        				</div>
		                        				<div className="d-flex align-items-baseline gap-4">
		                        					<div className="d-flex align-items-center gap-2 colorLightGray">
		                        						<input id="expiringLease" type="checkbox" className="form-check-input" />
		                        						<label htmlFor="expiringLease" className="fontSize10">Expiring Lease</label>
		                        					</div>
		                        					<div className="d-flex align-items-center gap-2 colorLightGray">
		                        						<input id="lateRent" type="checkbox" className="form-check-input" />
		                        						<label htmlFor="lateRent" className="fontSize10">Late Rent</label>
		                        					</div>
		                        					<div>
		                        						<FilterAltOutlinedIcon fontSize="large" sx={{ color: 'lightgray' }} />
		                        					</div>
		                        					<div className="input-icons">
	                                    				<i className="fas fa-search icon"></i>
	                                    				<input 
	                                    					type="text" 
	                                    					className="form-control placeholderColor input-field" 
	                                    					placeholder="Search"
	                                    					onChange={handleSearch}
	                                    				/>
	                                    			</div>
		                        				</div>
		                        			</div>

		                        			<TenantsTable userListing={userListing} />

		                        			<Pagination totalPages={totalPages} currentPage={currentPage} limit={limit} handlePageChange={handlePageChange} handleChangeLimit={handleChangeLimit} handlePrevPage={handlePrevPage} handleNextPage={handleNextPage} />

											{/* Pagination Controls
										    <div className='d-flex justify-content-end gap-2'>
									        	<nav aria-label="Page navigation example">
													<ul className="pagination gap-2">
														<li className="page-item">
															<a className="page-link rounded" onClick={handlePrevPage} disabled={currentPage === 1}><KeyboardArrowLeftIcon /></a>
														</li>
									        			{pageNumbers.map((pageNumber) => (
													    	<li key={pageNumber} className={`page-item ${currentPage === pageNumber ? 'activePageNo' : ''}`}>
													    		<a className="page-link rounded" onClick={() => handlePageChange(pageNumber)} style={{ padding: '7px 18px' }}>
													    			{pageNumber}
													    		</a>
													    	</li>
									        			))}
									        			<li className="page-item">
									        				<a className="page-link rounded" 
									        					onClick={handleNextPage} 
									        					disabled={currentPage === totalPages}>
									        					<KeyboardArrowRightIcon />
									        				</a>
									        			</li>
									        		</ul>
												</nav>

												<FormControl size="small">
												  	<Select
												    	labelId="demo-simple-select-label"
												    	id="demo-simple-select"
												    	value={10}
												    	label=""
												    	onChange={handleChangeLimit}
												  	>
												    	<MenuItem value={10}>10</MenuItem>
												    	<MenuItem value={50}>50</MenuItem>
												    	<MenuItem value={100}>100</MenuItem>
												  	</Select>
												</FormControl>
										    </div>
											*/}
		                        		</div>
		                        	</div>
	                        	</div>
							</div>
						</div>

						<br /><br /><br />
	    			</div>
	    		</div>
	    	</div>
		</>
	);
}

export default Tenants;