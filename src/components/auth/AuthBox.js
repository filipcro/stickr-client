// @flow
import React from 'react';
import type { Node } from 'react';

import style from './AuthBox.module.css';
import logo from '../../assets/logo-dark.svg';

type AuthBoxProps = {
  children: Node
};

function AuthBox(props: AuthBoxProps) {
  const { children } = props;

  return (
    <div className={style.background}>
      <img src={logo} alt="Stickr Logo" className={style.logo} />
      <div className={style.box}>
        {children}
      </div>
    </div>
  );
}

export default AuthBox;
