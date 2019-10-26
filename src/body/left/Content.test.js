import React from 'react'
import ReactDOM from 'react-dom'
import Content from './Content'
import { render, waitForElement, fireEvent } from "@testing-library/react";

it('renders without crashing', () => {
     const content = render(<Content />)
     expect(content).toMatchSnapshot();
})

it('lets user click on the next slide', async () => {
  const { getByTestId } = render(<Content />)
  const secondSlide = await waitForElement(() =>
    getByTestId('1'),
  )
  fireEvent.click(secondSlide)
})
