import React from 'react'
import ReactDOM from 'react-dom'
import Carousel from './Carousel'
import { render, waitForElement, fireEvent } from "@testing-library/react";

it('renders without crashing', () => {
     const carousel = render(<Carousel />)
     expect(carousel).toMatchSnapshot()
})

it('allows for user to search', async () => {
     const carousel = render(<Carousel />)
     const getByTestId = carousel.getByTestId
     const searchBar = await waitForElement(() =>
       getByTestId('searchBar'),
     )
     fireEvent.click(searchBar)
     fireEvent.change(searchBar, {target : {value : 'A'}})
     expect(carousel).toMatchSnapshot()
     fireEvent.keyDown(searchBar, { key: 'backspace', code: 8, charCode: 8 })
     expect(carousel).toMatchSnapshot()
})
