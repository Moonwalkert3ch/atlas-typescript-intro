import React from 'react';
import { CoverArt } from './CoverArt';
import { SongTitle } from './SongTitle';
import { PlayControls } from './PlayControls';
import { VolumeControl } from './VolumeControls';

// Define types for the CurrentlyPlaying props
interface CurrentlyPlayingProps {
  song: {
    title: string;
    artist: string;
    coverUrl: string;
  } | null; // Allow null if no song is playing
}

export function CurrentlyPlaying({ song }: CurrentlyPlayingProps) {
  if (!song) {
    return <div className="text-center text-gray-500">No song is playing</div>;
  }

  return (
    <div className="flex flex-col space-y-6">
      <CoverArt coverUrl={song.coverUrl} />
      <SongTitle title={song.title} artist={song.artist} />
      <PlayControls />
      <VolumeControl />
    </div>
  );
}
