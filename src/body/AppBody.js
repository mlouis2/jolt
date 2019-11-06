import React from 'react'

import './AppBody.css'

import Content from './left/Content'
import mockApi from './fakeapi'
import realApi from './api.js'

function AppBody() {
     const useMock = true
     const api = useMock ? mockApi : realApi
     return (
          <div className="appBody">
               <Content api={api}/>
          </div>
     )
}

export default AppBody
