import {defineMessages} from 'react-intl';

const langMessages = defineMessages({
  langEnGB: {
    id: 'lang.en-GB',
    defaultMessage: 'english'
  },
  langFrFR: {
    id: 'lang.fr-FR',
    defaultMessage: 'french'
  },
  langUnknown: {
    id: 'lang.unknown',
    defaultMessage: 'unknown language'
  }
});

function getTranslatedLanguage(formatMessage, lang) {
  switch(lang) {
    case "en-GB":
      return formatMessage(langMessages.langEnGB);
    case "fr-FR":
      return formatMessage(langMessages.langFrFR);
    default:
      return formatMessage(langMessages.langUnknown);
  }
}

export default getTranslatedLanguage;
