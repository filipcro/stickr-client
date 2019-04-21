// @flow
import React, { useState } from 'react';
import { Trans } from '@lingui/macro';

import TextInput from '../shared/form/TextInput';
import Button from './Button';
import { emailValidator } from '../../api/validation';

function ForgottenPasswordForm() {
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');


  const validateEmail = () => {
    setEmailError(emailValidator(email));
  };

  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    validateEmail();
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} noValidate>

      <TextInput
        label={<Trans id="auth.email">Email</Trans>}
        value={email}
        type="email"
        error={emailError}
        setValue={setEmail}
        blured={validateEmail}
      />
      <Button
        text={
          <Trans id="auth.resetPasswordButton">Reset Password</Trans>
        }
      />
    </form>
  );
}

export default ForgottenPasswordForm;
