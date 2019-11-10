import React from "react";

import "./AppBody.css";

import Content from "./left/Content";

function AppBody(props) {
  const numPokemon = props.numPokemon;
  console.log("num pokemon is ", numPokemon);
  return (
    <div className="appBody">
      <Content api={props.api} numPokemon={numPokemon} />
    </div>
  );
}

export default AppBody;
