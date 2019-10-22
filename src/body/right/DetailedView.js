import React from 'react'

import './DetailedView.css'
import InfoBox from './InfoBox.js'

// Note how functional components that don’t have additional logic simply return their markup.
function DetailedView() {
  return (
    <div className="DetailedView">
      <InfoBox />
    </div>
  );
}

export default DetailedView
