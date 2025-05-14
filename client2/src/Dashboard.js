import React, { useState, useEffect } from 'react';
// import BarChartIcon from '@mui/icons-material/BarChart';
import { TextField, InputAdornment } from '@mui/material';
import AccountMenu from './AccountMenu';
import Sidebar from './Sidebar';
import BasicSparkLine from './BasicSparkLine';
import BasicDateCalendar from './BasicDateCalendar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import SearchIcon from '@mui/icons-material/Search';
// import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WidgetsIcon from '@mui/icons-material/Widgets';
import Avatar from '@mui/material/Avatar';
import DataUsageIcon from '@mui/icons-material/DataUsage';

const Dashboard = () => {
	return (
	    <>
	    	<div className="container-fluid">
	    		<div className="row">
	    			
	    			<Sidebar />
	    			
	    			<div className="col-md-10 main-content no-padding">
	    				<nav className="navbar navbar-custom">
		    				<div className="container-fluid">

		                        <TextField
						        	placeholder="Type in to search"
						          	variant="outlined"
						          	className="custom-placeholder"
						          	margin="normal"
						          	value=""
						          	style={{ width: '33.33%' }}
						          	sx={{
							        	// Custom border color
							        	'& .MuiOutlinedInput-root': {
								          	'& fieldset': {
								            	borderColor: '#dee2e6', // Custom border color
								          	},
								          	'&:hover fieldset': {
								            	borderColor: '#0056b3', // Border color when hovered
								          	},
								          	'&.Mui-focused fieldset': {
								            	borderColor: '#0056b3', // Border color when focused
								          	},
							        	},
							      	}}
						          	slotProps={{
							        	input: {
							            	startAdornment: (
							              		<InputAdornment position="start">
							                		<SearchIcon  sx={{ color: '#dee2e6' }} />
							              		</InputAdornment>
							            	),
							          	},
							        }}
						        />

		                        <div className="dropdown ml-auto">
		                        	<AccountMenu />
		                        </div>
	                    	</div>

	                    	<div className="row custom-margin-container container-fluid p-0" style= {{ marginLeft: '1px', marginTop: '-70px'}}>
			                    <div className="col-md-4">
			                        <div className="card card-custom p-2">
			                        	<div className="d-flex justify-content-between">
			                        		<small>New Maintenance Requests</small>
			                        		<small style={{ backgroundColor: '#083A5B', color: 'white', fontSize:"11px" }} className='btn btn-sm'>02 Resolved</small>
			                        	</div>
			                        	<div className="d-flex justify-content-between align-items-center">
			                        		<BasicSparkLine />
			                        		<h2 className="d-flex flex-column align-items-center" style= {{ flex: '1'}}>
			                        			<span><strong>19</strong></span><span style={{ color: 'lightslategray', fontSize: '12px' }}><strong>TODAY</strong></span>
			                        		</h2>
			                        	</div>
			                        </div>
			                    </div>
			                    <div className="col-md-4">
			                    	<div className="card card-custom p-2">
			                        	<div className="d-flex justify-content-between">
			                        		<small>Expiring Contracts</small>
			                        		<small style={{ fontSize:"11px" }} className="bg-warning px-2 text-white btn btn-sm">-34%</small>
			                        	</div>
			                        	<div className="d-flex justify-content-between align-items-center">
			                        		<BasicSparkLine />
			                        		<h2 className="d-flex flex-column align-items-center" style= {{ flex: '1'}}>
			                        			<span><strong>03</strong></span><span style={{ color: 'lightslategray', fontSize: '12px' }}><strong>TODAY</strong></span>
			                        		</h2>
		                        		</div>
		                        	</div>
			                    </div>
			                    <div className="col-md-4">
			                        <div className="card card-custom p-2">
			                            <div className="d-flex flex-column">
			                        		<small>Vacancies</small>
			                        		<DataUsageIcon sx={{ fontSize: 105 }} />
			                        	</div>
			                        </div>
			                    </div>
			                </div>
	                	</nav>

	    				<div className="container-fluid" style={{ marginTop: '-70px' }}>
	    					{/* first section */}
	    					<div className="row">
		    					<div className="col-md-8">
		    						<div className="card p-3" style={{ height: '512px'}}>
	                            		<div className="card-body">
	                            			<div className="">
	                            				<div className="d-flex justify-content-between">
	                            					<div>
	                                    				<h4>New Maintenance Request</h4>
	                                    				<p style={{ color: 'lightgray' }}>See a snapshot of the latest maintenance request</p>
	                                    			</div>
	                                    			<div className="input-icons">
	                                    				<i className="fas fa-search icon"></i>
	                                    				<input type="text" className="form-control placeholderColor input-field" placeholder="Search" />
	                                    			</div>
	                                    		</div>
	                                    		<div style={{ height: '296px', overflowY: 'scroll', paddingRight: '20px' }}><table className="tableBorderCollapse">
												    <thead>
												    	<tr>
													        <th></th>
													        <th>TITLE</th>
													        <th>STATUS</th>
													        <th>PRIORITY</th>
													        <th>CREATED</th>
												      	</tr>
												    </thead>
												    <tbody>
												      	<tr>
													        <td className="noRightBorder">1</td>
													        <td className="noRightBorder">Anna</td>
													        <td className="noRightBorder">complete</td>
													        <td className="noRightBorder">Medium</td>
													        <td>7 APR 2020 6:30 PM</td>
												      	</tr>
												      	<tr>
													        <td className="noRightBorder">2</td>
													        <td className="noRightBorder">Anna</td>
													        <td className="noRightBorder">Pending</td>
													        <td className="noRightBorder">Low</td>
													        <td>7 APR 2020 6:30 PM</td>
												      	</tr>
												      	<tr className="tableRowActive">
													        <td className="noRightBorder">3</td>
													        <td className="noRightBorder">Anna</td>
													        <td className="noRightBorder">In Progress</td>
													        <td className="noRightBorder">High</td>
													        <td>7 APR 2020 6:30 PM</td>
												      	</tr>
												      	<tr>
													        <td className="noRightBorder">4</td>
													        <td className="noRightBorder">Anna</td>
													        <td className="noRightBorder">complete</td>
													        <td className="noRightBorder">Medium</td>
													        <td>7 APR 2020 6:30 PM</td>
												      	</tr>
												      	<tr>
													        <td className="noRightBorder">5</td>
													        <td className="noRightBorder">Anna</td>
													        <td className="noRightBorder">Pending</td>
													        <td className="noRightBorder">Low</td>
													        <td>7 APR 2020 6:30 PM</td>
												      	</tr>
												      	<tr>
													        <td className="noRightBorder">6</td>
													        <td className="noRightBorder">Anna</td>
													        <td className="noRightBorder">In Progress</td>
													        <td className="noRightBorder">High</td>
													        <td>7 APR 2020 6:30 PM</td>
												      	</tr>
												      	<tr>
													        <td className="noRightBorder">7</td>
													        <td className="noRightBorder">Anna</td>
													        <td className="noRightBorder">complete</td>
													        <td className="noRightBorder">Medium</td>
													        <td>7 APR 2020 6:30 PM</td>
												      	</tr>
												      	<tr>
													        <td className="noRightBorder">8</td>
													        <td className="noRightBorder">Anna</td>
													        <td className="noRightBorder">Pending</td>
													        <td className="noRightBorder">Low</td>
													        <td>7 APR 2020 6:30 PM</td>
												      	</tr>
												      	<tr>
													        <td className="noRightBorder">9</td>
													        <td className="noRightBorder">Anna</td>
													        <td className="noRightBorder">In Progress</td>
													        <td className="noRightBorder">High</td>
													        <td>7 APR 2020 6:30 PM</td>
												      	</tr>
												      	<tr>
													        <td className="noRightBorder">10</td>
													        <td className="noRightBorder">Anna</td>
													        <td className="noRightBorder">In Progress</td>
													        <td className="noRightBorder">High</td>
													        <td>7 APR 2020 6:30 PM</td>
												      	</tr>
												    </tbody>
												</table></div>
												<br/><br/>
												<h5><a href="#" style={{ float: 'right', color: 'lightgray', textDecoration: 'none' }}>View All</a></h5>
	                                    	</div>
	                            		</div>
		    						</div>
		    					</div>

		    					<div className="col-md-4">
		    						<div className="card p-3">
	                            		<div className="card-body">
	                            			<div className="">
	                            				<div className="d-flex justify-content-center align-items-center mb-3">
		                            				<CalendarMonthIcon />
		                                    		<h3>CALENDA</h3>
		                                    	</div>
		                                    	<Stack spacing={2} direction="row" className="mb-3">
											      	<Button variant="contained" sx={{ backgroundColor: '#083A5B', color: 'white' }}>Monthl</Button>
											      	<Button variant="contained" sx={{ backgroundColor: 'lightgray', color: 'lightslategray' }}>Weekly</Button>
											      	<Button variant="contained" sx={{ backgroundColor: 'lightgray', color: 'lightslategray' }}>Daily</Button>
										    	</Stack>
	                                    		<BasicDateCalendar />
	                                    	</div>
	                            		</div>
		    						</div>
		    					</div>
	    					</div>

	    					{/* second section */}
	    					<div className="row mt-4">
		    					<div className="col-md-8">
		    						<div className="card p-3" style={{ height: '492px'}}>
	                            		<div className="card-body">
	                            			<div className="">
	                            				<div className="d-flex justify-content-between">
	                            					<div>
	                                    				<h4>Late Payments</h4>
	                                    				<p style={{ color: 'lightgray' }}>See a list of tenants who are behind on payments.</p>
	                                    			</div>
	                                    			<div className="input-icons">
	                                    				<i className="fas fa-search icon"></i>
	                                    				<input type="text" className="form-control placeholderColor input-field" placeholder="Search" />
	                                    			</div>
	                                    		</div>
	                                    		<div style={{ height: '296px', overflowY: 'scroll', paddingRight: '20px' }}><table className="tableBorderCollapse">
												    <thead>
												    	<tr>
													        <th></th>
													        <th>TITLE</th>
													        <th>EMAIL</th>
													        <th>AMOUNT</th>
													        <th>DUE DATE</th>
												      	</tr>
												    </thead>
												    <tbody>
												      	<tr>
													        <td className="noRightBorder">1</td>
													        <td className="noRightBorder">Anna</td>
													        <td className="noRightBorder">complete</td>
													        <td className="noRightBorder">Medium</td>
													        <td>7 APR 2020 6:30 PM</td>
												      	</tr>
												      	<tr>
													        <td className="noRightBorder">2</td>
													        <td className="noRightBorder">Anna</td>
													        <td className="noRightBorder">Pending</td>
													        <td className="noRightBorder">Low</td>
													        <td>7 APR 2020 6:30 PM</td>
												      	</tr>
												      	<tr>
													        <td className="noRightBorder">3</td>
													        <td className="noRightBorder">Anna</td>
													        <td className="noRightBorder">In Progress</td>
													        <td className="noRightBorder">High</td>
													        <td>7 APR 2020 6:30 PM</td>
												      	</tr>
												      	<tr>
													        <td className="noRightBorder">4</td>
													        <td className="noRightBorder">Anna</td>
													        <td className="noRightBorder">complete</td>
													        <td className="noRightBorder">Medium</td>
													        <td>7 APR 2020 6:30 PM</td>
												      	</tr>
												      	<tr>
													        <td className="noRightBorder">5</td>
													        <td className="noRightBorder">Anna</td>
													        <td className="noRightBorder">Pending</td>
													        <td className="noRightBorder">Low</td>
													        <td>7 APR 2020 6:30 PM</td>
												      	</tr>
												      	<tr>
													        <td className="noRightBorder">6</td>
													        <td className="noRightBorder">Anna</td>
													        <td className="noRightBorder">In Progress</td>
													        <td className="noRightBorder">High</td>
													        <td>7 APR 2020 6:30 PM</td>
												      	</tr>
												      	<tr>
													        <td className="noRightBorder">7</td>
													        <td className="noRightBorder">Anna</td>
													        <td className="noRightBorder">complete</td>
													        <td className="noRightBorder">Medium</td>
													        <td>7 APR 2020 6:30 PM</td>
												      	</tr>
												      	<tr>
													        <td className="noRightBorder">8</td>
													        <td className="noRightBorder">Anna</td>
													        <td className="noRightBorder">Pending</td>
													        <td className="noRightBorder">Low</td>
													        <td>7 APR 2020 6:30 PM</td>
												      	</tr>
												      	<tr>
													        <td className="noRightBorder">9</td>
													        <td className="noRightBorder">Anna</td>
													        <td className="noRightBorder">In Progress</td>
													        <td className="noRightBorder">High</td>
													        <td>7 APR 2020 6:30 PM</td>
												      	</tr>
												      	<tr>
													        <td className="noRightBorder">10</td>
													        <td className="noRightBorder">Anna</td>
													        <td className="noRightBorder">In Progress</td>
													        <td className="noRightBorder">High</td>
													        <td>7 APR 2020 6:30 PM</td>
												      	</tr>
												    </tbody>
												</table></div>
												<br/><br/>
												<h5><a href="#" style={{ float: 'right', color: 'lightgray', textDecoration: 'none' }}>View All</a></h5>
	                                    	</div>
	                            		</div>
		    						</div>
		    					</div>

		    					<div className="col-md-4">
		    						<div className="card p-3">
	                            		<div className="card-body">
	                            			<div className="">
	                            				<div className="d-flex justify-content-center align-items-center mb-3">
		                            				<WidgetsIcon />
		                                    		<h3>TEAM TASK</h3>
		                                    	</div>
		                                    	
		                                    	<div className="card" style={{  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', border: 'none' }}>
												  	<div className="card-body">
												    	<p><strong>Tenant Leasing Even</strong></p>
												    	<div className="d-flex">
												    		<Avatar />
												    		<p style={{ color: 'lightgray' }} className="ms-3">14 AUG</p>
												    	</div>
												  	</div>
												</div>
												<div className="card mt-3" style={{  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', border: 'none' }}>
												  	<div className="card-body">
												    	<p><strong>Tenant Referral Program</strong></p>
												    	<div className="d-flex">
												    		<Avatar />
												    		<p style={{ color: 'lightgray' }} className="ms-3">15 AUG</p>
												    	</div>
												  	</div>
												</div>
												<div className="card mt-3" style={{  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', border: 'none' }}>
												  	<div className="card-body">
												    	<p><strong>Tenant Referral Program</strong></p>
												    	<div className="d-flex">
												    		<Avatar />
												    		<p style={{ color: 'lightgray' }} className="ms-3">15 AUG</p>
												    	</div>
												  	</div>
												</div>
	                                    	</div>
	                            		</div>
		    						</div>
		    					</div>
	    					</div>
	    					<br/><br/><br/>
	    				</div>

	    			</div>

	    		</div>
	    	</div>
	    </>
	);
};

export default Dashboard;