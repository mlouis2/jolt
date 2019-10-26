import React from 'react'
import ReactDOM from 'react-dom'
import DetailedView from './DetailedView'
import { render } from "@testing-library/react";

it('renders without crashing', () => {
     const detailedView = render(<DetailedView />)
     expect(detailedView).toMatchSnapshot()
})
