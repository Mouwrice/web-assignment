import React from 'react'
import './App.css'
import logo from './images/logo-white-on-transparent.png'
import background from './images/background.png'
import iphone from './images/iphone.png'
import orange from './images/orange_logo.png'
import luminus from './images/luminus_logo.png'
import playmobil from './images/playmobil_logo.png'

function App () {
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
            <h5>For consumers</h5>
            <h3>Install the Stampix App and order prints in just a few clicks</h3>
          </div>
          <a href="https://stampix.com">START PRINTING</a>
          <img id="iphone" src={iphone} alt="iphone"/>
        </div>
        <div id="business">
          <div id="text">
            <h5>For business</h5>
            <h3>Build emotional loyalty and brand engagement</h3>
          </div>
          <a href="https://business.stampix.com">STAMPIX FOR BUSINESS</a>
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
