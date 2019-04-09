// @flow
import React from 'react';
import { Link } from '@reach/router';

import LogInForm from './LogInForm';

function LogIn() {
  return (
    <>
      <h1>Log In</h1>
      <LogInForm />
      <p>
        <Link to="/signup">Forgotten password?</Link>
      </p>
      <hr />
      <p>
        {'Don\'t have an account?'}
        <Link to="/signup"> Sign Up.</Link>
      </p>
    </>
  );
}

export default LogIn;
