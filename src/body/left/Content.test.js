import React from "react";
import ReactDOM from "react-dom";
import Content from "./Content";
import {
  render,
  waitForElement,
  fireEvent,
  waitForDomChange
} from "@testing-library/react";
import ReactTestUtils, { act } from "react-dom/test-utils";
import api from "../api";

const testNumPokemon = 20;

it("renders without crashing", async () => {
  await act(async () => {
    const content = render(<Content api={api} numPokemon={testNumPokemon} />);
    expect(content).toMatchSnapshot();
  });
});

it("lets user click on the next slide", async () => {
  let div;
  await act(async () => {
    div = document.createElement("div");
    ReactDOM.render(<Content api={api} numPokemon={testNumPokemon} />, div);
  });
  waitForDomChange({ div }).then(() => {
    const secondSlide = div.querySelector("#Ivysaur");
    expect(secondSlide).not.toBeNull();
    fireEvent.click(secondSlide);
  });
});

it("updates info box when user clicks on next slide", async () => {
  let div;
  await act(async () => {
    div = document.createElement("div");
    ReactDOM.render(<Content api={api} numPokemon={testNumPokemon} />, div);
  });
  waitForDomChange({ div }).then(() => {
    const secondSlide = div.querySelector("#Ivysaur");

    expect(secondSlide).not.toBeNull();
    fireEvent.click(secondSlide);

    const secondSlideInfoBox = div.querySelector("#InfoBox1");
  });
});
