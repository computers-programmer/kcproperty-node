import React from 'react';

import BasicSparkLine from './BasicSparkLine';

function HeaderCard(props) {
	return (
		<>
			<div className="col-md-4">
	            <div className="card p-3 shadow border-0">
	            	<div className="d-flex justify-content-between">
	            		<p className="fontSize10 m-0">{ props.heading }</p>
	            		<p style={{ backgroundColor: `${props.btnColor}` }} className="btn btn-sm fontSize10 text-white m-0">
	            			{ props.btnText }
	            		</p>
	            	</div>
	            	<div className="d-flex justify-content-between align-items-center">
	            		<BasicSparkLine />
	            		<div className="d-flex flex-column align-items-center">
	            			<h2 className="fw-bolder m-0">{ props.count }</h2>
	            			<p className="fontSize10 colorLightGray fw-bolder m-0">TODAY</p>
	            		</div>
	            	</div>
	            </div>
	        </div>
		</>
	);
}

export default HeaderCard;