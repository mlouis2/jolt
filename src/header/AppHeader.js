import React from 'react'

import './AppHeader.css'
import pokeball from '../images/pokeball.png';

const AppHeader = () => (
  <div className="AppHeader">
    <div className="TitleBar" style={{}}>
      <div className="Title">
        JOLT
      </div>
      <img className="PokeBall" src={pokeball} alt="test"/>
    </div>
  </div>
)

export default AppHeader
