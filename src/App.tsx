import React from 'react'
import './App.css'
import logo from './images/logo-white-on-transparent.png'

function App () {
  return (
    <div>
      <div className="background"/>
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
          <h5>For consumers</h5>
          <h3>Install the Stampix App and order prints in just a few clicks</h3>
          <a href="https://stampix.com">START PRINTING</a>
        </div>
        <div id="business">
          <h5>For business</h5>
          <h3>Build emotional loyalty and brand engagement</h3>
          <a href="https://business.stampix.com">STAMPIX FOR BUSINESS</a>
        </div>
      </div>
    </div>
  )
}

export default App
