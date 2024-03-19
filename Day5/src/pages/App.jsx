// App.jsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Admin from './Admin';
import User from './User';

const App = () => {
  const [colleges, setColleges] = useState([
    { id: 1, name: 'College A', image: 'college_a_image_url.jpg', description: 'Description for College A' },
    { id: 2, name: 'College B', image: 'college_b_image_url.jpg', description: 'Description for College B' },
    { id: 3, name: 'College C', image: 'college_c_image_url.jpg', description: 'Description for College C' },
  ]);

  const handleAddCollege = (newCollege) => {
    setColleges([...colleges, newCollege]);
  };

  const handleDeleteCollege = (id) => {
    const updatedColleges = colleges.filter((college) => college.id !== id);
    setColleges(updatedColleges);
  };

  const handleUpdateCollege = (id, newName, newImage, newDescription) => {
    const updatedColleges = colleges.map((college) =>
      college.id === id
        ? {
            ...college,
            name: newName,
            image: newImage,
            description: newDescription,
          }
        : college
    );
    setColleges(updatedColleges);
  };

  return (
    <Routes>
      <Route
        path="/admin"
        element={<Admin colleges={colleges} onAdd={handleAddCollege} onDelete={handleDeleteCollege} onUpdate={handleUpdateCollege} />}
      />
      <Route path="/user" element={<User colleges={colleges} />} />
    </Routes>
  );
};

export default App;
