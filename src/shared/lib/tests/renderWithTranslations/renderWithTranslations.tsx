import { render } from '@testing-library/react';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nCfg from 'shared/config/i18n/i18nForTests';

export const renderWithTranslations = (Component: React.ReactNode) =>
  render(<I18nextProvider i18n={i18nCfg}>{Component}</I18nextProvider>);
