import React from 'react'
import ReactDOM from 'react-dom'
import { titleCase, formatNumber, formatTypes } from './Pokemon'

it('can title case strings', () => {
     expect(titleCase("testingTitleCase")).toEqual("TestingTitleCase");
})

it('can format type numbers', () => {
     expect(formatNumber(20)).toEqual("#020");
     expect(formatNumber(2)).toEqual("#002");
     expect(formatNumber(259)).toEqual("#259");
})

it('can format pokemon types', () => {
     expect(formatTypes(["fire", "water"])).toEqual("Fire/Water");
     expect(formatTypes(["grass"])).toEqual("Grass");
})
