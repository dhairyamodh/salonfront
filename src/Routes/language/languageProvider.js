import React from 'react';

import { IntlProvider } from 'react-intl';
import { InjectRTL } from 'assets/styles/global.style';
import Cookie from 'js-cookie';
import { isRTL, isLocale } from './language.utils';
import { StyleSheetManager } from 'styled-components';
import RTLPlugin from 'stylis-plugin-rtl';
import {changeLanguage as handleLanguage} from '../../redux/actions/languageActions'
import { useDispatch } from 'react-redux';

 const LanguageProvider = ({ children, messages }) => {
  const dispatch = useDispatch()
  const [locale, setLocale] = React.useState('en');
  const changeLanguage = (newLocale) => {
    setLocale(newLocale);
    dispatch(handleLanguage(newLocale))
  };
  React.useEffect(() => {
    const localSetting = Cookie.get('locale');
    if (localSetting && isLocale(localSetting)) {
      document.documentElement.lang = localSetting;
      setLocale(localSetting);
    }
  }, [locale]);
  let isRtl = isRTL(locale);

  return (

      <IntlProvider locale={locale} messages={messages[locale]}>
        <InjectRTL lang={locale} dir={isRtl ? 'rtl' : 'ltr'}>
          <StyleSheetManager stylisPlugins={isRtl ? [RTLPlugin] : []}>
            {children}
          </StyleSheetManager>
        </InjectRTL>
      </IntlProvider>
  );
};

export default LanguageProvider
