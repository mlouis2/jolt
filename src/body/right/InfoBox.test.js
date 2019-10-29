import React from 'react'
import ReactDOM from 'react-dom'
import { InfoBox, formatMoveName } from './InfoBox'
import { render } from "@testing-library/react";

it('renders without crashing', () => {
     const infoBox = render(<InfoBox />)
     expect(infoBox).toMatchSnapshot()
})

it('can format move names', () => {
     expect(formatMoveName("razor-wind")).toBe("Razor-Wind");
})
