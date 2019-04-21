// @flow
import React, { useState } from 'react';
import { Trans } from '@lingui/macro';

import TextInput from '../shared/form/TextInput';
import Checkbox from '../shared/form/Checkbox';
import Button from './Button';
import { fieldValidator, emailValidator } from '../../api/validation';

function LogInForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const [remember, setRemember] = useState<boolean>(false);

  const validateEmail = () => {
    setEmailError(emailValidator(email));
  };

  const validatePassword = () => {
    setPasswordError(fieldValidator(password));
  };

  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    validateEmail();
    validatePassword();
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} noValidate>
      <TextInput
        label={<Trans id="auth.email">Email</Trans>}
        value={email}
        type="email"
        setValue={setEmail}
        error={emailError}
        blured={validateEmail}
      />
      <TextInput
        label={<Trans id="auth.password">Password</Trans>}
        value={password}
        type="password"
        setValue={setPassword}
        error={passwordError}
        blured={validatePassword}
      />

      <Checkbox
        label={<Trans id="auth.rememberMeCheckBox">Remember me</Trans>}
        value={remember}
        setValue={setRemember}
      />

      <Button text={<Trans id="auth.logInButton">Log In</Trans>} />
    </form>
  );
}


export default LogInForm;
