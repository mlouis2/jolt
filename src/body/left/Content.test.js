import React from 'react'
import ReactDOM from 'react-dom'
import Content from './Content'
import { render } from "@testing-library/react";

it('renders without crashing', () => {
     const content = render(<Content />)
     expect(content).toMatchSnapshot();
})
