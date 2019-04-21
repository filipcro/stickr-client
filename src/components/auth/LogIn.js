// @flow
import React from 'react';
import { Link } from '@reach/router';
import { Trans } from '@lingui/macro';

import LogInForm from './LogInForm';

function LogIn() {
  return (
    <>
      <h1>
        <Trans id="auth.logIn">Log In</Trans>
      </h1>
      <LogInForm />
      <p>
        <Link to="/forgoten-password"><Trans id="auth.forgottenPasswordLink">Forgotten password?</Trans></Link>
      </p>
      <p>
        <Trans id="auth.dontHaveAnAccount">
          Dont have an account?
          <Link to="/signup"> Sign Up.</Link>
        </Trans>
      </p>
    </>
  );
}

export default LogIn;
