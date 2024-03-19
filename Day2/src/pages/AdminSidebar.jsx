import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import '../assets/css/AdminSidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar-container" style={{ width: isOpen ? '500px' : '50px', transition: 'width 0.3s' }}>
      <MenuIcon onClick={toggleSidebar} style={{ cursor: 'pointer', marginBottom: '10px' }} />
      {isOpen && (
        <ul className="sidebar-menu">
          <li>
            <Link to="/admin/academydetail">Admin Academy Detail</Link>
          </li>
          <li>
            <Link to="/admin/manageusers">Manage Users</Link>
          </li>
          <li>
            <Link to="/admin/settings">Settings</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
