import React from 'react'
import ReactDOM from 'react-dom'
import Carousel from './Carousel'
import { render } from "@testing-library/react";

it('renders without crashing', () => {
     const carousel = render(<Carousel />)
     expect(carousel).toMatchSnapshot();
})
