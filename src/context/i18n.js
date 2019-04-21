// @flow
import { createContext } from 'react';

const DEFAULT_LANGUAGE = 'en';

type i18nContext= {
  language: string,
  setLanguage: (language: string) => void
};

const i18nContextValue = {
  language: DEFAULT_LANGUAGE,
  setLanguage: () => {}
};

export default createContext<i18nContext>(i18nContextValue);
