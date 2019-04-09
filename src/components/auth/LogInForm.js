// @flow
import React, { useState } from 'react';

import TextInput from '../shared/form/TextInput';
import Checkbox from '../shared/form/Checkbox';
import Button from './Button';

function LogInForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [remember, setRemember] = useState<boolean>(false);

  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} noValidate>
      <TextInput
        label="Email"
        value={email}
        type="email"
        setValue={setEmail}
      />
      <TextInput
        label="Password"
        value={password}
        type="password"
        setValue={setPassword}
      />

      <Checkbox
        label="Remember me"
        value={remember}
        setValue={setRemember}
      />

      <Button text="Log In" />
    </form>
  );
}


export default LogInForm;
