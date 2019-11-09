import React from "react";

import "./AppBody.css";

import Content from "./left/Content";
import mockApi from "./fakeapi";
import realApi from "./api.js";

function AppBody(props) {
  const useMock = false;
  const api = useMock ? mockApi : realApi;
  const numPokemon = props.numPokemon;
  return (
    <div className="appBody">
      <Content api={api} numPokemon={numPokemon} />
    </div>
  );
}

export default AppBody;
