import React from 'react'
import ReactDOM from 'react-dom'
import AppBody from './AppBody'

import { render } from "@testing-library/react";
import ReactTestUtils, { act } from 'react-dom/test-utils'

it('renders without crashing', async () => {
     await act(async () => {
      const body = render(<AppBody />)
     });
})
