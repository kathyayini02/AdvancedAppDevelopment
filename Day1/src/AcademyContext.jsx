// AcademyContext.jsx
import React, { createContext, useContext, useState } from 'react';

const AcademyContext = createContext();

export const AcademyProvider = ({ children }) => {
  const [selectedAcademy, setSelectedAcademy] = useState(null);

  const selectAcademy = (academy) => {
    setSelectedAcademy(academy);
  };

  return (
    <AcademyContext.Provider value={{ selectedAcademy, selectAcademy }}>
      {children}
    </AcademyContext.Provider>
  );
};

export const useAcademyContext = () => {
  const context = useContext(AcademyContext);
  if (!context) {
    throw new Error('useAcademyContext must be used within an AcademyProvider');
  }
  return context;
};
