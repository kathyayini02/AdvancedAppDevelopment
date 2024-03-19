import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [selectedRole, setSelectedRole] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRoleSelect = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleLogin = () => {
    // Redirect based on the selected role
    if (selectedRole === 'admin') {
      navigate('/adminlogin'); // Redirect to the admin login page
    } else if (selectedRole === 'user') {
      navigate('/userlogin'); // Redirect to the user login page
    } else {
      setErrorMessage('Please select a role');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'white' }}>
      <div style={{ textAlign: 'center', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', backgroundColor: 'grey' }}>
        <h2 style={{ fontSize: '24px' }}>Login</h2>
        <label>
          Select Role:
          <select value={selectedRole} onChange={handleRoleSelect} style={{ margin: '10px', padding: '5px' }}>
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </label>
        <br />
        <button onClick={handleLogin} style={{ fontSize: '18px', padding: '10px', cursor: 'pointer', backgroundColor: 'black', color: 'white', border: 'none', borderRadius: '15px' }}>
          Login
        </button>
        {errorMessage && <p style={{ color: 'black' }}>{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Login;
