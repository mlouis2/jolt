import React from 'react'
import ReactDOM from 'react-dom'
import Content from './Content'
import { render, waitForElement, fireEvent } from "@testing-library/react";
import ReactTestUtils, { act } from 'react-dom/test-utils'
import mockApi from '../fakeapi'

it('renders without crashing', async () => {
  await act(async () => {
    const content = render(<Content api={mockApi}/>)
    expect(content).toMatchSnapshot();
  });
})

it('lets user click on the next slide', async () => {
await act(async () => {
     const { getByTestId } = render(<Content api={mockApi}/>)
     const secondSlide = await waitForElement(() =>
       getByTestId('1'),
     )
     expect(secondSlide).not.toBeNull();
     fireEvent.click(secondSlide)
});
})

it('updates info box when user clicks on next slide', async () => {
  let div;
  await act(async () => {
    div = document.createElement('div')
    ReactDOM.render(<Content api={mockApi}/>, div)
  });
  const secondSlide = div.querySelector('#Ivysaur');

  expect(secondSlide).not.toBeNull();
  fireEvent.click(secondSlide)

  const secondSlideInfoBox = div.querySelector('#InfoBox1');
})
