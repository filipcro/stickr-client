import { createContext } from 'react';

const authContextValue = {
  user: null,
  setUser: () => {},
};

export default createContext(authContextValue);
