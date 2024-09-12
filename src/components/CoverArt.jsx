import React from "react";
import coverArt from '../assets/placeholder.svg';

export function CoverArt() {
    return (
      <div className="flex flex-col">
        <img src={coverArt} alt="Cover Art" className="w-96 h-96 object-cover" />
      </div>
    );
  }