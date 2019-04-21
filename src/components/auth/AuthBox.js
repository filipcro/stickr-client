// @flow
import React from 'react';
import type { Node } from 'react';
import { I18n } from '@lingui/react';
import { t } from '@lingui/macro';

import style from './AuthBox.module.css';
import logo from '../../assets/logo-dark.svg';

type AuthBoxProps = {
  children: Node
};

function AuthBox(props: AuthBoxProps) {
  const { children } = props;

  return (
    <div className={style.background}>
      <I18n>
        {({ i18n }) => (
          <img src={logo} alt={i18n._(t('alt.logo')`Stickr logo`)} className={style.logo} />
        )}
      </I18n>
      <div className={style.box}>
        {children}
      </div>
    </div>
  );
}

export default AuthBox;
