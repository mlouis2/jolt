import React from "react";
import ReactDOM from "react-dom";
import AppBody from "./AppBody";

import { render } from "@testing-library/react";
import ReactTestUtils, { act } from "react-dom/test-utils";
import api from "./api";

const TEST_NUM_POKEMON = 20;

it("renders without crashing", async () => {
  await act(async () => {
    const body = render(<AppBody api={api} numPokemon={TEST_NUM_POKEMON} />);
  });
});
