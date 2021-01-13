import React, { createContext } from 'react';

const initialState = {
  user: {
    name: 'Eric',
    location: 'Toronto',
  },
};

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ initialState }}>
      {children}
    </UserContext.Provider>
  );
};
