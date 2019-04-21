// @flow
import React from 'react';
import { Link } from '@reach/router';
import { Trans } from '@lingui/macro';

import ForgottenPasswordForm from './ForgottenPasswordForm';

function ForgottenPassword() {
  return (
    <>
      <h1>
        <Trans id="auth.forgottenPassword">Forgotten Password</Trans>
      </h1>
      <ForgottenPasswordForm />
      <p>
        <Link to="/login">
          <Trans id="auth.backToLogIn">Back to Log In.</Trans>
        </Link>
      </p>
    </>
  );
}

export default ForgottenPassword;
