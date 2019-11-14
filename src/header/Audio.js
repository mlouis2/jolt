import React, { useState, useEffect } from "react";
import playButton from "../images/play.png";
import pauseButton from "../images/pause.png";
import "./Audio.css";
const backgroundMusic = new Audio(
  "https://raw.githubusercontent.com/lmu-cmsi370-fall2019/front-end-development-mlouis2/master/src/sounds/Route1.mp3?token=AHJW34ARTRCGFMFKTFZZTS252Y77M"
);
backgroundMusic.loop = true;

function AudioControl() {
  const [paused, setPaused] = useState(true);

  function audioClicked() {
    paused ? backgroundMusic.play() : backgroundMusic.pause();
    setPaused(!paused);
  }

  return (
    <div className="AudioButton" onClick={audioClicked}>
      <img src={paused ? playButton : pauseButton} />
    </div>
  );
}

export default AudioControl;
