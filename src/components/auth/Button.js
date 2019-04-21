// @flow
import React from 'react';
import type { Node } from 'react';

import style from './Button.module.css';

type ButtonProps = {
  text: Node
};

function Button(props: ButtonProps) {
  const { text } = props;

  return (
    <button type="submit" className={style.button}>
      {text}
    </button>
  );
}

export default Button;
