import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./player.scss";

const Player = ({ title, preview }) => {
  return (
    <div className="Player">
      <ReactAudioPlayer src={preview} title={title} autoPlay={true} controls />
    </div>
  );
};

export default Player;
