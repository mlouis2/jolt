import React from 'react'
import ReactDOM from 'react-dom'
import Content from './Content'
import { render, waitForElement, fireEvent } from "@testing-library/react";
import ReactTestUtils from 'react-dom/test-utils'

it('renders without crashing', () => {
  const content = render(<Content />)
  expect(content).toMatchSnapshot();
})

it('lets user click on the next slide', async () => {
  const { getByTestId } = render(<Content />)
  const secondSlide = await waitForElement(() =>
    getByTestId('1'),
  )
  expect(secondSlide).not.toBeNull();
  fireEvent.click(secondSlide)

})

it('updates info box when user clicks on next slide', async () => {
  const div = document.createElement('div')

  ReactTestUtils.act(() => {
    ReactDOM.render(<Content/>, div)
  })

  const secondSlide = div.querySelector('#Ivysaur');

  expect(secondSlide).not.toBeNull();
  fireEvent.click(secondSlide)

  const secondSlideInfoBox = div.querySelector('#InfoBox1');
})
