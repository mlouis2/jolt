import React from 'react'

import './AppHeader.css'
import pokeball from '../images/pokeball.png';

const AppHeader = () => (
     <div className="appHeader">
          <div className="titleBar" style={{}}>
               <a href="/" className="titleLink">
                    <div className="title">
                         JOLT&nbsp;
                    </div>
                    <img className="pokeBall"
                         src={pokeball}
                         alt="pokeball"/>
               </a>
          </div>
     </div>
)

export default AppHeader
