import React, { useEffect, useState } from 'react';

import Sidebar from './Sidebar';
import NavBar from './NavBar';
import HeaderCard from './HeaderCard';

function Maintenance() {
    return (
		<>
            <div className="container-fluid">
	    		<div className="row">

	    			<Sidebar />

	    			<div className="col-md-10 p-0 bg-white">

	    				<NavBar title="Maintenance" btnTitle="Submit Request" btnTo="/maintenance/add" btn2Title="Add Invoice" btn2To="/maintenance/add" backArrow={false} />
                        
                        <div className="px-4" style={{ marginTop: '-85px'}}>
							<div className="row">
								<HeaderCard heading="NEW TENANTS" btnText="+15%" count="19" btnColor="#083A5B" />
								<HeaderCard heading="EXPIRING LEASES" btnText="-34%" count="03" btnColor="#eda90fd6" />
								<HeaderCard heading="LATE RENT" btnText="+25%" count="05" btnColor="#cd4141eb" />
							</div>
						</div>

                        <div className="px-4 mt-3">
                            <div className="row">
                                <div className="col">
                                    <div className="card p-3" style={{ height: '512px'}}>
	                            		<div className="card-body">
	                            			<div className="">
	                            				<div className="d-flex justify-content-between">
	                            					<div>
	                                    				<h4>Maintenance Requests</h4>
	                                    				<p style={{ color: 'lightgray' }}>Complete list of all maintenance requests</p>
	                                    			</div>
	                                    			<div className="input-icons">
	                                    				<i className="fas fa-search icon"></i>
	                                    				<input type="text" className="form-control placeholderColor input-field" placeholder="Search" />
	                                    			</div>
	                                    		</div>
	                                    		<div style={{ height: '296px', overflowY: 'scroll', paddingRight: '20px' }}>
                                                    <table className="tableBorderCollapse">
                                                        <thead>
                                                            <tr>
                                                                <th></th>
                                                                <th>TITLE</th>
                                                                <th>STATUS</th>
                                                                <th>PRIORITY</th>
                                                                <th>PROPERTY</th>
                                                                <th>ASSIGNED</th>
                                                                <th>SUBMITTED</th>
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
                                                    </table>
                                                </div>
												<br/><br/>
												<h5><a href="#" style={{ float: 'right', color: 'lightgray', textDecoration: 'none' }}>View All</a></h5>
	                                    	</div>
	                            		</div>
		    						</div>

                                </div>
                            </div>
                        </div>

                        <div className="px-4 mt-3">
                            <div className="row">
                                <div className="col">
                                    <div className="card p-3" style={{ height: '512px'}}>
	                            		<div className="card-body">
	                            			<div className="">
	                            				<div className="d-flex justify-content-between">
	                            					<div>
	                                    				<h4>Maintenance Requests</h4>
	                                    				<p style={{ color: 'lightgray' }}>Complete list of all maintenance requests</p>
	                                    			</div>
	                                    			<div className="input-icons">
	                                    				<i className="fas fa-search icon"></i>
	                                    				<input type="text" className="form-control placeholderColor input-field" placeholder="Search" />
	                                    			</div>
	                                    		</div>
	                                    		<div style={{ height: '296px', overflowY: 'scroll', paddingRight: '20px' }}>
                                                    <table className="tableBorderCollapse">
                                                        <thead>
                                                            <tr>
                                                                <th></th>
                                                                <th>TITLE</th>
                                                                <th>STATUS</th>
                                                                <th>PRIORITY</th>
                                                                <th>PROPERTY</th>
                                                                <th>ASSIGNED</th>
                                                                <th>SUBMITTED</th>
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
                                                    </table>
                                                </div>
												<br/><br/>
												<h5><a href="#" style={{ float: 'right', color: 'lightgray', textDecoration: 'none' }}>View All</a></h5>
	                                    	</div>
	                            		</div>
		    						</div>

                                </div>
                            </div>
                        </div>
                    </div>
	    		</div>
	    	</div>
        </>
    );
}

export default Maintenance;