import React from 'react'
import ReactDOM from 'react-dom'
import Carousel from './Carousel'
import { render, waitForElement, fireEvent } from "@testing-library/react";

it('renders without crashing', () => {
     const carousel = render(<Carousel />)
     expect(carousel).toMatchSnapshot()
})

it('allows for user to search', async () => {
     const { getByTestId } = render(<Carousel />)
     const searchBar = await waitForElement(() =>
       getByTestId('searchBar'),
     )
     fireEvent.click(searchBar)
     fireEvent.keyDown(searchBar, { key: 'A', code: 65, charCode: 65 })
})
