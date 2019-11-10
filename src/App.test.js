import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { render } from "@testing-library/react";
import ReactTestUtils, { act } from "react-dom/test-utils";

const numPokemon = 20;

it("renders without crashing", async () => {
  console.log("num pokemon in apptest is ", numPokemon);
  await act(async () => {
    const header = render(<App numPokemon={numPokemon} />);
  });
});
