// @flow
import React, { useState } from 'react';
import { Router, Redirect } from '@reach/router';

import I18n from './I18n';

import AuthContext from '../context/auth';
import AuthBox from './auth/AuthBox';
import LogIn from './auth/LogIn';
import SignUp from './auth/SignUp';
import ForgottenPassword from './auth/ForgottenPassword';

function App() {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <I18n>
        <Router>
          <AuthBox path="/">
            <LogIn path="login" />
            <SignUp path="signup" />
            <ForgottenPassword path="forgoten-password" />
            <Redirect from="*" to="login" />
          </AuthBox>
        </Router>
      </I18n>
    </AuthContext.Provider>
  );
}

export default App;
