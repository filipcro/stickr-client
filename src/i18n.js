// @flow
import { setupI18n } from '@lingui/core';

import en from './locales/en/messages';
import hr from './locales/hr/messages';

const i18n = setupI18n({
  language: 'en',
  catalogs: { en, hr }
});

export default i18n;
