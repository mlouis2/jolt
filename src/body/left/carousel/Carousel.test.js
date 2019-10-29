import React from 'react'
import ReactDOM from 'react-dom'
import Carousel from './Carousel'
import TestRenderer from 'react-test-renderer'
import ReactTestUtils, { act } from 'react-dom/test-utils'
import { render, waitForElement, fireEvent, wait } from "@testing-library/react";

const fakeList = [
     {
          name: "Bulbasaur",
          sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          number: 1,
          types: "grass",
          description: "Test test test.",
          index: 0,
          evolution: [1, 2],
          "moves": [{
                    "name": "razor-wind",
                    "description": "Inflicts regular damage. User's critical hit rate is one level higher when using this move. User charges for one turn before attacking. This move cannot be selected by sleep talk.",
                    "types": [
                         "normal"
                    ]
               }
          ],
     },
     {
          name: "Ivysaur",
          sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
          number: 2,
          types: "grass",
          description: "Test test test.",
          index: 1,
          evolution: [1, 2],
          "moves": [{
                    "name": "razor-wind",
                    "description": "Inflicts regular damage. User's critical hit rate is one level higher when using this move. User charges for one turn before attacking. This move cannot be selected by sleep talk.",
                    "types": [
                         "normal"
                    ]
               }
          ],
     }
];

it('renders without crashing', () => {
     const carousel = render(<Carousel />)
     expect(carousel).toMatchSnapshot()
})

it('should start with empty search field', async () => {
     const component = TestRenderer.create(<Carousel />)
     const tree = component.toJSON()
     expect(tree).toMatchSnapshot()
})

it('allows for user to type in search bar', async () => {
     const carousel = render(<Carousel />)
     const getByTestId = carousel.getByTestId
     const searchBar = await waitForElement(() =>
       getByTestId('searchBar'),
     )
     fireEvent.click(searchBar)
     fireEvent.change(searchBar, {target : {value : 'A'}})
     expect(carousel).toMatchSnapshot()
})

it('filters pokemon list when user types in search bar', async () => {
     const div = document.createElement('div')

     ReactTestUtils.act(() => {
          ReactDOM.render(<Carousel  pokemonList={fakeList}/>, div)
     })

     const carousel = div.querySelector('.Carousel')
     const searchBar = div.querySelector('.SearchBar')

     ReactTestUtils.act(() => {
          searchBar.value = 'Bulbasaur'
          ReactTestUtils.Simulate.change(searchBar)
     })

     const slider = carousel.querySelector('.slider')
     const bulbasaur = carousel.querySelector('#Bulbasaur')

     expect(bulbasaur).not.toBeNull();
     expect(slider.children.length).toEqual(1)
})

it('resets pokemon list when user types in search bar then erases it', async () => {
     const div = document.createElement('div')

     ReactTestUtils.act(() => {
          ReactDOM.render(<Carousel  pokemonList={fakeList}/>, div)
     })

     const carousel = div.querySelector('.Carousel')
     const searchBar = div.querySelector('.SearchBar')

     ReactTestUtils.act(() => {
          searchBar.value = 'Bulbasaur'
          ReactTestUtils.Simulate.change(searchBar)
     })

     let slider = carousel.querySelector('.slider')
     let bulbasaur = carousel.querySelector('#Bulbasaur')

     expect(bulbasaur).not.toBeNull();
     expect(slider.children.length).toEqual(1)

     ReactTestUtils.act(() => {
          searchBar.value = ''
          ReactTestUtils.Simulate.change(searchBar)
     })

     slider = carousel.querySelector('.slider')
     bulbasaur = carousel.querySelector('#Bulbasaur')

     expect(bulbasaur).not.toBeNull();
     expect(slider.children.length).toEqual(2)
})
