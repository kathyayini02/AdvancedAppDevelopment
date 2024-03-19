// CollegeList.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CollegeList = ({ colleges, isAdmin, onDelete, onUpdate }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Academies</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {colleges.map((college) => (
          <li key={college.id} style={{ marginBottom: '40px' }}>
            <Link to={`/user/details/`} style={{ textDecoration: 'none', color: 'black' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img
                  src={college.image}
                  alt={`${college.name} Image`}
                  style={{ maxWidth: '800px', maxHeight: '800px', marginBottom: '10px', borderRadius: '10px' }}
                />
                <strong style={{ fontSize: '20px' }}>{college.name}</strong>
                <p style={{ fontSize: '16px' }}>{college.description}</p>
              </div>
            </Link>
            {isAdmin && (
              <div>
                <button onClick={() => onDelete(college.id)}>Delete</button>
                <button
                  onClick={() =>
                    onUpdate(
                      college.id,
                      prompt('Enter new name:', college.name),
                      prompt('Enter new image URL:', college.image),
                      prompt('Enter new description:', college.description)
                    )
                  }
                >
                  Update
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollegeList;
