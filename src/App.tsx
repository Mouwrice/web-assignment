import React from 'react'
import { initReactI18next, useTranslation } from 'react-i18next'
import i18n from 'i18next'
import './App.css'
import logo from './images/logo-white-on-transparent.png'
import background from './images/background.png'
import iphone from './images/iphone.png'
import orange from './images/orange_logo.png'
import luminus from './images/luminus_logo.png'
import playmobil from './images/playmobil_logo.png'

// i18n is used for multiple language support
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          "consumers": "For consumers",
          "consumersText": "Install the Stampix App and order prints in just a few clicks",
          "consumersLink": "start printing",
          "business": "For business",
          "businessText": "Build emotional loyalty and brand engagement",
          "businessLink" : "stampix for business"
        }
      }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

function App () {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <img src={background} className="background" alt={background}/>
      <header>
        <img src={logo} id="logo" alt="logo"/>
        <ul id="languageList">
          <li>NL</li>
          <li>FR</li>
          <li>EN</li>
        </ul>
      </header>
      <div id="main">
        <div id="consumers">
          <div id="text">
            <h5>{t("consumers")}</h5>
            <h3>{t("consumersText")}</h3>
          </div>
          <a href="https://stampix.com">{t("consumersLink")}</a>
          <img id="iphone" src={iphone} alt="iphone"/>
        </div>
        <div id="business">
          <div id="text">
            <h5>{t("business")}</h5>
            <h3>{t("businessText")}</h3>
          </div>
          <a href="https://business.stampix.com">{t("businessLink")}</a>
          <div id="logos">
            <img src={orange} alt="orange logo"/>
            <img src={playmobil} alt="playmobil logo"/>
            <img src={luminus} alt="luminus logo"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
