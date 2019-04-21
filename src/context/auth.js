// @flow
import { createContext } from 'react';

type authContext = {
  user: ?string,
  setUser: () => void
};

const authContextValue = {
  user: null,
  setUser: () => {}
};

export default createContext<authContext>(authContextValue);
