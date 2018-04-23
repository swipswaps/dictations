import React from "react";
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import Router from './router';
import localeData from '../data/locales'

addLocaleData([...en, ...fr]);

const language = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage;
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];
const messages = localeData[languageWithoutRegionCode] || localeData[language] || localeData.en;

function Index(props) {
  return (
    <IntlProvider locale={language} messages={messages}>
      <Router />
    </IntlProvider>
  );
}

export default Index;
