import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Details() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [alternatePhoneNumber, setAlternatePhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [doorNumber, setDoorNumber] = useState('');
  const [area, setArea] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');

  const navigate = useNavigate();

  const handleEnroll = () => {
    // Validate the details before enrollment
    if (name && age && phoneNumber && alternatePhoneNumber && isValidEmail(email) && selectedOption && doorNumber && area && country && state) {
      // Redirect to the Enroll page
      navigate('/user/enroll');
    } else {
      // Handle validation error or show a message
      alert('Please fill in all required details with valid values.');
    }
  };

  const isValidEmail = (email) => {
    // Simple email validation (must contain '@gmail.com')
    return email.endsWith('@gmail.com');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {/* Form section */}
      <div style={{ width: '400px', backgroundColor: '#c3f3c3', padding: '20px', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '24px', textAlign: 'center', marginBottom: '20px' }}>Enter Your Details</h2>

        {/* Your form inputs */}
        <div style={{ marginBottom: '20px' }}>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>Age:</label>
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>Phone Number:</label>
          <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>Alternate Phone Number:</label>
          <input type="tel" value={alternatePhoneNumber} onChange={(e) => setAlternatePhoneNumber(e.target.value)} />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        {/* Dropdown box */}
        <div style={{ marginBottom: '20px' }}>
          <label>Select Option:</label>
          <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
            <option value="" disabled>
              Choose an option
            </option>
            <option value="Option 1">Grandmaster Minds Chess Academy</option>
            <option value="Option 2">Checkmate Strategy School</option>
            <option value="Option 3">Brilliant Board Strategies Institute</option>
          </select>
        </div>

        {/* Address box */}
        <div style={{ backgroundColor: '#add8e6', padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '10px', textAlign: 'center' }}>Address</h3>
          <div style={{ marginBottom: '10px' }}>
            <label>Door Number:</label>
            <input type="text" value={doorNumber} onChange={(e) => setDoorNumber(e.target.value)} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Area:</label>
            <input type="text" value={area} onChange={(e) => setArea(e.target.value)} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Country:</label>
            <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>State:</label>
            <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
          </div>
        </div>

        {/* Enroll button */}
        <button style={{ width: '100%', padding: '10px', backgroundColor: '#4caf50', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={handleEnroll}>
          Enroll in Course
        </button>
      </div>
    </div>
  );
}

export default Details;
