import React from "react";
import ReactDOM from "react-dom";
import Content from "./Content";
import { render } from "@testing-library/react";
import ReactTestUtils, { act } from "react-dom/test-utils";
import api from "../api";

const testNumPokemon = 20;

it("renders without crashing", async () => {
  let div;
  await act(async () => {
    div = document.createElement("div");
    const content = render(
      <Content api={api} numPokemon={testNumPokemon} />,
      div
    );
    expect(content).toMatchSnapshot();
  });
});
