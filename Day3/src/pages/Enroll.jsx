import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Enroll() {
  const [enrolled, setEnrolled] = useState(false);
  const navigate = useNavigate();

  const handleEnroll = () => {
    // Perform any necessary actions for enrollment here
  
    // Show success message
    setEnrolled(true);
  
    // After 2 seconds, reset enrollment state, and navigate to the academies page
    setTimeout(() => {
      setEnrolled(false);
      navigate('/user/');
    }, 2000);
  };
  

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Enroll Course Page</h2>
      <button onClick={handleEnroll} disabled={enrolled}>
        {enrolled ? 'Enrolled Successfully!' : 'Enroll Now'}
      </button>

      {enrolled && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#add8e6', borderRadius: '8px', color: '#000' }}>
          Successfully enrolled! {/* You can customize this message */}
        </div>
      )}
    </div>
  );
}

export default Enroll;
