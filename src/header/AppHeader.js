import React, { useEffect } from "react";

import "./AppHeader.css";
import pokeball from "../images/pokeball.png";
import AudioControl from "./Audio";

function AppHeader() {
  useEffect(() => {}, []);
  return (
    <div className="appHeader">
      <div className="titleBar" style={{}}>
        <AudioControl />
        <div className="titleLinkContainer">
          <a href="/" className="titleLink">
            <div className="title">JOLT&nbsp;</div>
            <img className="pokeBall" src={pokeball} alt="pokeball" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
