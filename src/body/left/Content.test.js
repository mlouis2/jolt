import React from "react";
import ReactDOM from "react-dom";
import Content from "./Content";
import { render, waitForElement, fireEvent } from "@testing-library/react";
import ReactTestUtils, { act } from "react-dom/test-utils";
import mockApi from "../fakeapi";
import realApi from "../api";

const useMock = true;

it("renders without crashing", async () => {
  await act(async () => {
    const content = render(<Content api={useMock ? mockApi : realApi} />);
    expect(content).toMatchSnapshot();
  });
});

it("lets user click on the next slide", async () => {
  await act(async () => {
    const { getByTestId } = render(
      <Content api={useMock ? mockApi : realApi} />
    );
    const secondSlide = await waitForElement(() => getByTestId("1"));
    expect(secondSlide).not.toBeNull();
    fireEvent.click(secondSlide);
  });
});

it("updates info box when user clicks on next slide", async () => {
  let div;
  await act(async () => {
    div = document.createElement("div");
    ReactDOM.render(<Content api={useMock ? mockApi : realApi} />, div);
  });
  const secondSlide = div.querySelector("#Ivysaur");

  expect(secondSlide).not.toBeNull();
  fireEvent.click(secondSlide);

  const secondSlideInfoBox = div.querySelector("#InfoBox1");
});
