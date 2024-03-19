import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.endsWith('@gmail.com')) {
      setSubmissionMessage('Successfully submitted!');
      
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      setSubmissionMessage('Invalid email. Please use a Gmail address.');
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Contact Us</h2>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

      
        {}
        <div style={{ marginBottom: '30px', backgroundColor: '#e0f7fa', padding: '20px', borderRadius: '10px' }}>
          <h3>Contact Details</h3>
          <div style={{ marginBottom: '15px' }}>
            <img
              src="https://example.com/phone-icon.png"
              alt="Phone Icon"
              style={{ width: '30px', height: 'auto', marginRight: '10px' }}
            />
            <span>Phone: +1 (123) 456-7890</span>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <img
              src="https://example.com/email-icon.png"
              alt="Email Icon"
              style={{ width: '30px', height: 'auto', marginRight: '10px' }}
            />
            <span>Email: info@chessacademy.com</span>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <img
              src="https://example.com/instagram-icon.png"
              alt="Instagram Icon"
              style={{ width: '30px', height: 'auto', marginRight: '10px' }}
            />
            <span>Instagram: @ChessAcademy</span>
          </div>

          <div>
            <img
              src="https://example.com/facebook-icon.png"
              alt="Facebook Icon"
              style={{ width: '30px', height: 'auto', marginRight: '10px' }}
            />
            <span>Facebook: ChessAcademyPage</span>
          </div>
        </div>



        {}
        <div style={{ backgroundColor: '#f3e5f5', padding: '20px', borderRadius: '10px' }}>
          <h3>Feedback Form</h3>
          {submissionMessage && <p style={{ color: submissionMessage.includes('Invalid') ? 'red' : 'green' }}>{submissionMessage}</p>}
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br />
            <label>
              Email:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label>
              Feedback:
              <textarea rows="4" cols="30" value={feedback} onChange={(e) => setFeedback(e.target.value)}></textarea>
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;