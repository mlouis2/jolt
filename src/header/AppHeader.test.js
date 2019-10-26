import React from 'react'
import ReactDOM from 'react-dom'
import AppHeader from './AppHeader'
import { render } from "@testing-library/react";

it('renders and matches snapshot', () => {
     const header = render(
          <AppHeader />
     )
     expect(header).toMatchSnapshot();
})
