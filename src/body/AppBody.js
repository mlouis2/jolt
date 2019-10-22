import React from 'react'

import './AppBody.css'

import { Content } from './left/Content'
import DetailedView from './right/DetailedView'

// Note how functional components that don’t have additional logic simply return their markup.
const AppBody = () => (
  <div className="AppBody">
    <Content />
  </div>
)

export default AppBody
