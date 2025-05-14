import React, { useEffect, useState } from 'react';

import Sidebar from './Sidebar';
import NavBar from './NavBar';

import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import BuildIcon from '@mui/icons-material/Build';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import WalletIcon from '@mui/icons-material/Wallet';
import ShareIcon from '@mui/icons-material/Share';

function Settings() {
    const [activeTab, setActiveTab] = useState('coding'); // State for active tab

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
		<>
            <div className="container-fluid">
	    		<div className="row">

	    			<Sidebar />

	    			<div className="col-md-10 p-0 bg-white">

	    				<NavBar title="Settings" btnTitle="" backArrow={true} />

                        <div className="px-4 mt-3">
                            <div className="row">
                                {/* first section */}
								<div className="col-md-12 col-lg-4">
									<div className="card shadow border-0">
		                        		<div className="card-body px-5">
                                            <div className="">
                                                <h4>Menu Options</h4>
                                                
                                                <button
                                                    className={`nav-link ${activeTab === 'coding' ? 'active' : ''}`}
                                                    onClick={() => handleTabClick('coding')}
                                                    id="v-pills-coding-tab"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="v-pills-coding"
                                                    aria-selected={activeTab === 'coding'}
                                                >
                                                    <SignalCellularAltIcon /><strong> Coding </strong>
                                                </button>
                                                <button
                                                    className={`nav-link ${activeTab === 'account' ? 'active' : ''}`}
                                                    onClick={() => handleTabClick('account')}
                                                    id="v-pills-account-tab"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="v-pills-account"
                                                    aria-selected={activeTab === 'account'}
                                                >
                                                    <HomeOutlinedIcon /><strong> Account Info </strong>
                                                </button>
                                                <button
                                                    className={`nav-link ${activeTab === 'notifications' ? 'active' : ''}`}
                                                    onClick={() => handleTabClick('notifications')}
                                                    id="v-pills-notifications-tab"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="v-pills-notifications"
                                                    aria-selected={activeTab === 'notifications'}
                                                >
                                                    <NotificationsOutlinedIcon /><strong> Notifications </strong>
                                                </button>
                                                <button
                                                    className={`nav-link ${activeTab === 'fees' ? 'active' : ''}`}
                                                    onClick={() => handleTabClick('fees')}
                                                    id="v-pills-fees-tab"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="v-pills-fees"
                                                    aria-selected={activeTab === 'fees'}
                                                >
                                                    <WalletIcon /><strong> Fees </strong>
                                                </button>
                                                <button
                                                    className={`nav-link ${activeTab === 'integrations' ? 'active' : ''}`}
                                                    onClick={() => handleTabClick('integrations')}
                                                    id="v-pills-integrations-tab"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="v-pills-integrations"
                                                    aria-selected={activeTab === 'integrations'}
                                                >
                                                    <PersonOutlinedIcon /><strong> Integrations </strong>
                                                </button>
                                                <button
                                                    className={`nav-link ${activeTab === 'referral' ? 'active' : ''}`}
                                                    onClick={() => handleTabClick('referral')}
                                                    id="v-pills-referral-tab"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="v-pills-referral"
                                                    aria-selected={activeTab === 'referral'}
                                                >
                                                    <ShareIcon /><strong> Referral Code </strong>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* second section */}
                                <div className="col-md-12 col-lg-8">
									<div className="card shadow border-0">
		                        		<div className="card-body px-5">
                                            <div className="tab-content" id="v-pills-tabContent">
                                                <div
                                                    className={`tab-pane fade ${activeTab === 'coding' ? 'show active' : ''}`}
                                                    id="v-pills-coding"
                                                    role="tabpanel"
                                                    aria-labelledby="v-pills-coding-tab"
                                                >
                                                    <h4>Contract Fees</h4>
                                                    <div class="row">
                                                        <div class="col">
                                                            <label>Amount*</label>
                                                            <input type="text" class="form-control" placeholder="$50" />
                                                        </div>
                                                        <div class="col">
                                                            <label>Days Late*</label>
                                                            <select class="form-select" aria-label="Default select example">
                                                                <option selected>Open this select menu</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <button>Update Fees</button>

                                                </div>
                                                <div
                                                    className={`tab-pane fade ${activeTab === 'account' ? 'show active' : ''}`}
                                                    id="v-pills-account"
                                                    role="tabpanel"
                                                    aria-labelledby="v-pills-account-tab"
                                                >
                                                    account info Content
                                                </div>
                                                <div
                                                    className={`tab-pane fade ${activeTab === 'notifications' ? 'show active' : ''}`}
                                                    id="v-pills-notifications"
                                                    role="tabpanel"
                                                    aria-labelledby="v-pills-notifications-tab"
                                                >
                                                    Notifications Content
                                                </div>
                                                <div
                                                    className={`tab-pane fade ${activeTab === 'fees' ? 'show active' : ''}`}
                                                    id="v-pills-fees"
                                                    role="tabpanel"
                                                    aria-labelledby="v-pills-fees-tab"
                                                >
                                                    Fees Content
                                                </div>
                                                <div
                                                    className={`tab-pane fade ${activeTab === 'integrations' ? 'show active' : ''}`}
                                                    id="v-pills-integrations"
                                                    role="tabpanel"
                                                    aria-labelledby="v-pills-integrations-tab"
                                                >
                                                    Integrations Content
                                                </div>
                                                <div
                                                    className={`tab-pane fade ${activeTab === 'referral' ? 'show active' : ''}`}
                                                    id="v-pills-referral"
                                                    role="tabpanel"
                                                    aria-labelledby="v-pills-referral-tab"
                                                >
                                                    <h4>Referral Code</h4>

                                                    <form class="row g-3">
                                                        <div class="col-8">
                                                            <label>Unique shareable link</label>
                                                            <input type="text" class="form-control" />
                                                        </div>
                                                        <div class="col-4">
                                                            <button type="submit" class="btn btn-primary mb-3">Confirm identity</button>
                                                        </div>
                                                        <div class="col-12">
                                                            <label>Referral Rewards Account</label>
                                                            <select class="form-select" aria-label="Default select example">
                                                                <option selected>Open this select menu</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </form>

                                                    <h4>Referral Program Details</h4>
                                                    <ul>
                                                        <li>Receive $5 for successfully referring users to Sky Lounge using the unique code above</li>
                                                        <li>A successful referral requires the referred user to sign up using your unique link and either complete a background screen or set up rent collection</li>
                                                        <li>Referral rewards will be directly deposited into the bank account selected above</li>
                                                    </ul>
                                                </div>
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

export default Settings;