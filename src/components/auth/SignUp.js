// @flow
import React from 'react';
import { Link } from '@reach/router';
import { Trans } from '@lingui/macro';

import SignUpForm from './SignUpForm';


function SignUp() {
  return (
    <>
      <h1><Trans id="auth.signUp">Sign Up</Trans></h1>
      <SignUpForm />
      <p>
        <Trans id="auth.alreadyHaveAnAccount">
          Already have an account?
          <Link to="/login"> Log In.</Link>
        </Trans>
      </p>
    </>
  );
}

export default SignUp;
