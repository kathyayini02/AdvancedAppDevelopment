import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!name || !age || !email || !password || !confirmPassword || !phoneNumber) {
      setError('All fields are required');
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Invalid email format');
      return;
    }

    // Validate password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      setError('Password must be at least 8 characters long and contain at least 1 uppercase letter, 1 lowercase letter, and 1 number');
      return;
    }

    // Validate password match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Add logic to handle the form submission (e.g., API calls, etc.)
    // For now, let's just log the entered values
    console.log({ name, age, email, password, confirmPassword, phoneNumber });

    // Clear error on successful submission
    setError('');

    // Redirect to the user page after successful submission
    navigate('/user');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ backgroundColor: 'lightgray', padding: '20px', borderRadius: '10px', maxWidth: '400px' }}>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label>
              Name:
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>
              Age:
              <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
            </label>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>
              Email:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>
              Password:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </label>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>
              Confirm Password:
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </label>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>
              Phone Number:
              <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
            </label>
          </div>
          <button type="submit">Sign In</button>
          {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Signin;