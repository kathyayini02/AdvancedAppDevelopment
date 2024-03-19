// Userlogin.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Userlogin.css'; // Import the CSS file

const Userlogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email and password (add your validation logic here)

    // Redirect to the user page after form submission
    navigate('/user');
  };

  const handleCreateAccount = () => {
    // Redirect to the signin page
    navigate('/signin');
  };

  return (
    <div className="container-user">
      <div className="card">
        <h2>User Login</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>
          <button type="submit">Submit</button>
        </form>
        <p>I don't have an account. <button onClick={handleCreateAccount}>Create account</button></p>
      </div>
    </div>
  );
};

export default Userlogin;
