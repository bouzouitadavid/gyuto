import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "../components/app/App";

// translation
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import common_fr from "../translations/fr/common.json";
import common_en from "../translations/en/common.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'fr',
  resources: {
    en: {
      common: common_en
    },
    fr: {
      common: common_fr
    },
  },
});

// For what is this fc ???
function noop() { }

if (process.env.NODE_ENV !== 'development') {
  console.log = noop;
  console.warn = noop;
  console.error = noop;
}

const IndexPage = () => (
    <I18nextProvider i18n={i18next}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();

export default IndexPage

