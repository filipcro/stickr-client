// @flow
import React, { useState } from 'react';
import { Router, Redirect } from '@reach/router';

import AuthContext from '../context/auth';
import AuthBox from './auth/AuthBox';
import LogIn from './auth/LogIn';
import SignUp from './auth/SignUp';

function App() {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <AuthBox>
        <Router>
          <LogIn path="/login" />
          <SignUp path="/signup" />
          <Redirect from="*" to="/login" />
        </Router>
      </AuthBox>
    </AuthContext.Provider>
  );
}

export default App;
