import React, { useState } from 'react';
import Sidebar from './Sidebar';

function Profile() {
  // Sample user data (replace with actual data)
  const [userProfile, setUserProfile] = useState({
    name: 'Ayanokoji Kiyotaka',
    age: 17,
    bio: 'You spend every day in anguish, yet you still cant do it.',
    experience: 'FIDE Master with 5+ years of competitive chess experience.',
    // Add more details as needed
  });

  const handleInputChange = (field, value) => {
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    // Add logic to submit the updated profile data (e.g., send to server)
    console.log('Profile updated:', userProfile);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
    <div style={{ maxWidth: '600px', margin: 'auto', marginTop: '50px', textAlign: 'left', fontSize: '18px' }}>
      <h2>Profile</h2>
      <div style={{ backgroundColor: '#ddd', padding: '20px', borderRadius: '8px' }}>
        {/* Profile image */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Juuu8BHhLR2qk7GjHSEgM-HqCH3FuBiHeA&usqp=CAU" // Replace with the actual image URL
          alt="Profile"
          style={{ width: '150px', height: '150px', borderRadius: '50%', margin: '0 auto', display: 'block' }}
        />

        <div style={{ marginTop: '20px' }}>
          <div>
            <strong>Name:</strong> <input type="text" value={userProfile.name} onChange={(e) => handleInputChange('name', e.target.value)} />
          </div>
          <div>
            <strong>Age:</strong> <input type="number" value={userProfile.age} onChange={(e) => handleInputChange('age', e.target.value)} />
          </div>
          <div>
            <strong>Bio:</strong>{' '}
            <textarea
              value={userProfile.bio}
              onChange={(e) => handleInputChange('bio', e.target.value)}
              style={{ height: '100px' }} // Customize the height here
            />
          </div>
          <div>
            <strong>Experience:</strong>{' '}
            <input type="text" value={userProfile.experience} onChange={(e) => handleInputChange('experience', e.target.value)} />
          </div>
          {/* Add more details here as needed */}
        </div>

        {/* Submit button */}
        <button onClick={handleSubmit} style={{ marginTop: '20px' }}>
          Submit
        </button>
      </div>
      </div>
    </div>
  );
}

export default Profile;
