import React from "react";
import { Link, graphql } from 'gatsby'
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "../serviceWorker";
import "../style.css";
import App from "../App";

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

const IndexPage = ({ data }) => (
    <I18nextProvider i18n={i18next}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

export default IndexPage

// request GraphQl
export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticles {
      edges {
        node {
          id
          title
          content
        }
      }
    }
  }
`
