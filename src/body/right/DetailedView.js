import React from 'react'

import './DetailedView.css'
import InfoBox from './InfoBox.js'

// Note how functional components that don’t have additional logic simply return their markup.
const DetailedView = () => (
  <div className="DetailedView">
    <InfoBox />
  </div>
)

export default DetailedView
