// @flow
import React from 'react';
import { Link } from '@reach/router';

import Loading from '../shared/Loading';

function SignUp() {
  return (
    <>
      <h1>Sign Up</h1>
      <p>Login</p>
      <br />
      <br />
      Hey hey
      <br />
      <Link to="/login">Log In</Link>
      <Loading />
    </>
  );
}

export default SignUp;
