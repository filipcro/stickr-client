// @flow
import React from 'react';
import type { Node } from 'react';

import style from './TextInput.module.css';

export type TextInputProps = {
  label: Node,
  value: string,
  type?: 'text' | 'password' | 'email',
  setValue: (value: string) => void,
  error?: Node,
  blured?: (void) => void,
  focused?: (void) => void,
  required?: boolean
}

function TextInput(props: TextInputProps) {
  const {
    label,
    value,
    type,
    setValue,
    error,
    blured,
    focused,
    required
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
          onBlur={blured}
          onFocus={focused}
          className={inputClass}
          required={required}
        />
      </label>
      {error ? <span className={style.errorMessage}>{error}</span> : ''}
    </div>
  );
}

TextInput.defaultProps = {
  type: 'text',
  error: '',
  blured: () => {},
  focused: () => {},
  required: false
};

export default TextInput;
