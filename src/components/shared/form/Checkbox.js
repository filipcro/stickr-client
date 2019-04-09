// @flow
import React from 'react';
import type { Node } from 'react';

import style from './Checkbox.module.css';

export type CheckboxProps = {
  label: Node,
  value: boolean,
  setValue: (value: boolean) => void,
  error?: string
}

function Checkbox(props: CheckboxProps) {
  const {
    label,
    value,
    setValue,
    error
  } = props;

  return (
    <div className={style.group}>
      <label className={style.label}>
        <input
          className={style.input}
          type="checkbox"
          checked={value}
          onClick={() => setValue(!value)}
        />
        <span className={style.box} />
        <span className={style.labelText}>{label}</span>
      </label>
      <span className={style.error}>{error}</span>
    </div>
  );
}

Checkbox.defaultProps = {
  error: ''
};

export default Checkbox;
