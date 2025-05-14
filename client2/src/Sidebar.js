import React from 'react';
import { NavLink } from 'react-router-dom';

import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import BuildIcon from '@mui/icons-material/Build';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import WidgetsIcon from '@mui/icons-material/Widgets';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import LabelIcon from '@mui/icons-material/Label';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

function Sidebar() {
	return (
		<>
			<div className="col-md-2 sidebar">
            
				<div className="d-flex justify-content-center align-items-center">
                    <img src="https://kcoproperties.com/leasegeneration/public/kco-logo.jpg" width="200" alt="KCO Properties Logo" />
                </div>
                
                <nav>
                    <NavLink to="/dashboard" activeClassName="active" className="colorLightGray"><SignalCellularAltIcon /><strong> Dashboard </strong></NavLink>
                    <NavLink to="/maintenance" activeClassName="active" className="colorLightGray"><BuildIcon /><strong> Maintenance </strong></NavLink>
 
                    <a className="colorLightGray" href="#"><InsertDriveFileIcon /> <strong> Contracts </strong></a>
                    <a className="colorLightGray" href="#"><WidgetsIcon /> <strong>  Tasks </strong></a>
                    <a className="colorLightGray" href="#"><CreditCardIcon /> <strong>  Billing </strong></a>
                    <a className="colorLightGray" href="#"><AutoGraphOutlinedIcon /> <strong>  Financials </strong></a>
                    <a className="colorLightGray" href="#"><LabelIcon /> <strong>  Listings </strong></a>
                    <a className="colorLightGray" href="#"><StarBorderIcon /> <strong>  Leads </strong></a>
                    <NavLink to="/tenants" activeClassName="active" className="colorLightGray"><PersonOutlinedIcon /> <strong>  Tenants </strong></NavLink>
                    <a className="colorLightGray" href="#"><HomeOutlinedIcon /> <strong>  Properties </strong></a>
                </nav>
			</div>
		</>
	);
}

export default Sidebar;