import React from 'react'
import ReactDOM from 'react-dom'
import AppBody from './AppBody'

import { render } from "@testing-library/react";

it('renders without crashing', () => {
     const body = render(<AppBody />)
})
