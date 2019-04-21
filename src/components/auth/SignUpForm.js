// @flow
import React, { useState } from 'react';
import { Trans } from '@lingui/macro';

import TextInput from '../shared/form/TextInput';
import Checkbox from '../shared/form/Checkbox';
import Button from './Button';
import {
  fieldValidator,
  emailValidator,
  passwordValidator,
  confirmedPasswordValidator,
  checkboxValidator
} from '../../api/validation';

function SignUpForm() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmation, setConfirmation] = useState<string>('');
  const [tos, setTos] = useState<boolean>(false);

  const [nameError, setNameError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [confirmationError, setConfirmationError] = useState<string>('');
  const [tosError, setTosError] = useState<string>('');

  const validateName = () => {
    setNameError(fieldValidator(name, true, { minLength: 3 }));
  };

  const validateEmail = () => {
    setEmailError(emailValidator(email));
  };

  const validatePassword = () => {
    setPasswordError(passwordValidator(password));
  };

  const validateConfirmation = () => {
    setConfirmationError(confirmedPasswordValidator(confirmation, password));
  };

  const validateTos = (value) => {
    setTosError(checkboxValidator(value));
  };

  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    validateName();
    validateEmail();
    validatePassword();
    validateConfirmation();
    validateTos(tos);
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} noValidate>
      <TextInput
        label={<Trans id="auth.fullName">Full name</Trans>}
        value={name}
        setValue={setName}
        error={nameError}
        blured={validateName}
      />

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

      <TextInput
        label={<Trans id="auth.confirmPassword">Repeat password</Trans>}
        value={confirmation}
        type="password"
        setValue={setConfirmation}
        error={confirmationError}
        blured={validateConfirmation}
      />

      <Checkbox
        label={
          <Trans id="auth.acceptTosCheckBox">I accept Tearms of Service</Trans>
        }
        value={tos}
        setValue={(value) => {
          setTos(value);
          validateTos(value);
        }}
        error={tosError}
      />

      <Button
        text={<Trans id="auth.signUpButton">Sign Up</Trans>}
      />
    </form>
  );
}

export default SignUpForm;
