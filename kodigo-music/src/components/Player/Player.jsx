import React, { useState } from 'react';
import './Player.css';

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="player-container">
      <div className="track-info">
        <p>Now Playing: **Lo-fi track #1**</p>
      </div>
      <div className="controls">
        <button onClick={handlePlayPause} className="play-button">
          {isPlaying ? '⏸️' : '▶️'}
        </button>
      </div>
    </div>
  );
};

export default Player;