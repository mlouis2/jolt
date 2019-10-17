import React from 'react'

import './AppHeader.css'
import pokeball from '../images/pokeball.png';

const AppHeader = () => (
  <div className="AppHeader">
    <div className="TitleBar" style={{}}>
      <a href="/" className="TitleLink">
        <div className="Title">
          JOLT
        </div>
        <img className="PokeBall" src={pokeball} alt="pokeball"/>
      </a>
    </div>
  </div>
)

export default AppHeader
