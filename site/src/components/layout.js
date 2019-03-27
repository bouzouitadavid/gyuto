import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Img from "./image.js"
// import "./layout.css"
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
console.log(i18next)
// For what is this fc ???
function noop() { }

if (process.env.NODE_ENV !== 'development') {
  console.log = noop;
  console.warn = noop;
  console.error = noop;
}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <I18nextProvider i18n={i18next}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <main>{children}</main>
        </div>
      </>
      </BrowserRouter>
    </I18nextProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
