// src/components/VolumeControl.jsx
import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

export function VolumeControl() {
  const [volume, setVolume] = useState(50);

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
  };

  return (
    <div className="flex p-2 ">
      {/* Volume Icon */}
      <VolumeUpIcon className="black" />
      
      {/* Slider Control */}
      <Slider
        value={volume}
        onChange={handleVolumeChange}
        aria-labelledby="volume-slider"
        min={0}
        max={90}
        sx={{
          color: "#6B7280",
          '& .MuiSlider-thumb': {
            backgroundColor: "#374151",
          },
          '& .MuiSlider-rail': {
            backgroundColor: "#E5E7EB",
          },
        }}
      />
    </div>
  );
}
