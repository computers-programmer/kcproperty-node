import React, { useState } from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function Pagination({ totalPages, currentPage, limit, handlePrevPage, handleNextPage, handlePageChange, handleChangeLimit }) {

	const pageNumbers = [];
	for (let i = 1; i <= totalPages; i++) {
		pageNumbers.push(i);
	}

	return (
		<>
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
				    	value={limit}
				    	label=""
				    	onChange={handleChangeLimit}
				  	>	
				  		<MenuItem value={2}>2</MenuItem>
				    	<MenuItem value={10}>10</MenuItem>
				    	<MenuItem value={50}>50</MenuItem>
				    	<MenuItem value={100}>100</MenuItem>
				  	</Select>
				</FormControl>
		    </div>
		</>
	);
}

export default Pagination;