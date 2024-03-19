import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Adminlogin.css'

const Adminlogin = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    // Replace these values with your actual admin credentials
    const adminUsername = 'admin';
    const adminPassword = 'admin123';

    if (username === adminUsername && password === adminPassword) {
      // Admin login successful
      setErrorMessage('');

      // Redirect to the Admin page
      navigate('/admin');
    } else {
      // Admin login failed
      setErrorMessage('Incorrect username or password');
    }
  };

  return (
    <div className="admin-login-container">
    <div className="admin-container">
      <h2 className="login-heading">Admin Login</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="login-input" />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="login-input" />
      </label>
      <br />
      <button onClick={handleLogin} className="login-button">
        Login
      </button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
    </div>
  );
};

export default Adminlogin;
