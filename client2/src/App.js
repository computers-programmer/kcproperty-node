import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';
import Tenants from './Tenants';
import TenantAdd from './TenantAdd';
import Dashboard from './Dashboard';
import Logout from './Logout';
import Settings from './Settings';
import Maintenance from './Maintenance';
import MaintenanceAdd from './MaintenanceAdd';

import './styles/styles.css';

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tenants" element={<Tenants />} />
        <Route path="/tenants/add" element={<TenantAdd />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/maintenance/add" element={<MaintenanceAdd />} />
      </Routes>
    </Router>
  );
}

export default App;
