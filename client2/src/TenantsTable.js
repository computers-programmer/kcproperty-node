import React from 'react';

function TenantsTable(props) {
	return (
		<>
			<table className="tableBorderCollapse px-4">
			    <thead>
			    	<tr>
				        <th>NAME</th>
				        <th>PHONE</th>
				        <th>EMAIL</th>
				        <th>PROPERTY</th>
				        <th>UNIT</th>
				        <th>LEASE EXPIRATION</th>
			      	</tr>
			    </thead>
			    <tbody>
			    	{props.userListing.map((user) => (
			        	<tr key={user.id}>
			        		<td className="noRightBorder">{user.name}</td>
					        <td className="noRightBorder">{user.phone}</td>
					        <td className="noRightBorder">{user.email}</td>
					        <td className="noRightBorder">{user.address}</td>
					        <td className="noRightBorder">{user.id}</td>
					        <td>{user.address} - {user.id}</td>
			        	</tr>
			        ))}
			      
			      	<tr className="tableRowActive">
				        <td className="noRightBorder">Kuldeep Gurjar</td>
				        <td className="noRightBorder">9826098260</td>
				        <td className="noRightBorder">kuldeep@gmail.com</td>
				        <td className="noRightBorder">116 - c chitawat indore M.P</td>
				        <td className="noRightBorder">110</td>
				        <td>Sky 101</td>
			      	</tr>
			    </tbody>
			</table>
		</>
	);
}

export default TenantsTable;