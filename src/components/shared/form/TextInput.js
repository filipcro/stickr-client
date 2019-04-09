// @flow
import React from 'react';

import style from './TextInput.module.css';

export type TextInputProps = {
  label: string,
  value: string,
  type?: 'text' | 'password' | 'email',
  setValue: (value: string) => void,
  error?: string
}

function TextInput(props: TextInputProps) {
  const {
    label,
    value,
    type,
    setValue,
    error
  } = props;

  const onChange = (
    e: SyntheticInputEvent<HTMLInputElement>
  ) => {
    setValue(e.target.value);
  };

  const inputClass = error ? style.inputWithError : style.input;

  return (
    <div className={style.group}>
      <label>
        <span className={style.labelText}>{label}</span>
        <input
          type={type}
          value={value}
          onChange={onChange}
          className={inputClass}
        />
      </label>
      {error ? <span className={style.errorMessage}>{error}</span> : ''}
    </div>
  );
}

TextInput.defaultProps = {
  type: 'text',
  error: ''
};

export default TextInput;
