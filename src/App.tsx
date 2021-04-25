import React from 'react'
import './App.css'
import logo from './images/logo-white-on-transparent.png'

function App () {
  return (
    <div>
      <div className="background"/>
      <header>
        <img src={logo} alt="logo"/>
        <ul>
          <li>NL</li>
          <li>FR</li>
          <li>EN</li>
        </ul>
      </header>
      <div>
        <div id="consumers">
          <p>For consumers</p>
          <p>Install the Stampix App and order prints in just a few clicks</p>
          <a href="https://stampix.com">START PRINTING</a>
        </div>
        <div id="business">
          <p>For business</p>
          <p>Build emotional loyalty and brand engagement</p>
          <a href="https://business.stampix.com">STAMPIX FOR BUSINESS</a>
        </div>
      </div>
    </div>
  )
}

export default App
