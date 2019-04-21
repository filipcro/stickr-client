// @flow
import React, { useState } from 'react';
import type { Node } from 'react';
import { I18nProvider } from '@lingui/react';

import I18nContext from '../context/i18n';
import i18n from '../i18n';

const DEFAULT_LANGUAGE = 'en'; // TODO refactor

type I18nProps = {
  children: Node
};

function I18n(props: I18nProps) {
  const { children } = props;

  const [language, setLanguage] = useState<string>(DEFAULT_LANGUAGE);

  return (
    <I18nContext.Provider value={{ language, setLanguage }}>
      <I18nProvider language="en" i18n={i18n}>
        {children}
      </I18nProvider>
    </I18nContext.Provider>
  );
}

export default I18n;
