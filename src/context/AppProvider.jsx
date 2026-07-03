import React, { useState, useEffect } from 'react';
import { upcomingTours } from '../mockData';
import { AppContext } from './AppContext';

export const AppProvider = ({ children }) => {
  const [tours, setTours] = useState(() => {
    const saved = localStorage.getItem('sahyadri_tours');
    return saved ? JSON.parse(saved) : upcomingTours;
  });

  const [enquiries, setEnquiries] = useState(() => {
    const saved = localStorage.getItem('sahyadri_enquiries');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('sahyadri_tours', JSON.stringify(tours));
  }, [tours]);

  useEffect(() => {
    localStorage.setItem('sahyadri_enquiries', JSON.stringify(enquiries));
  }, [enquiries]);

  const addTour = (newTour) => {
    setTours([{ id: Date.now(), ...newTour }, ...tours]);
  };

  const deleteTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  const addEnquiry = (newEnquiry) => {
    setEnquiries([{ id: Date.now(), date: new Date().toLocaleString(), ...newEnquiry }, ...enquiries]);
  };

  const deleteEnquiry = (id) => {
    setEnquiries(enquiries.filter((enq) => enq.id !== id));
  };

  return (
    <AppContext.Provider value={{ tours, addTour, deleteTour, enquiries, addEnquiry, deleteEnquiry }}>
      {children}
    </AppContext.Provider>
  );
};
