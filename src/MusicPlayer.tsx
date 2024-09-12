import React, { useEffect, useState } from 'react';
import { CurrentlyPlaying } from './components/CurrentlyPlaying';
import { Playlist } from './components/Playlist';

// Define types for playlist item
interface PlaylistItem {
  id: string;
  title: string;
  artist: string;
  songLength: string;
  coverUrl: string;
}

// Define types for MusicPlayer state
interface MusicPlayerState {
  playlist: PlaylistItem[];
  currentSong: PlaylistItem | null;
}

export function MusicPlayer() {
  const [state, setState] = useState<MusicPlayerState>({
    playlist: [],
    currentSong: null,
  });

  // Fetch playlist data from API
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist')
      .then((response) => response.json())
      .then((data: PlaylistItem[]) => {
        setState({
          playlist: data,
          currentSong: data[0] || null, // Set the first song as currently playing
        });
      });
  }, []);

  const handleSongSelect = (song: PlaylistItem) => {
    setState((prevState) => ({
      ...prevState,
      currentSong: song,
    }));
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-1 md:w-1/3">
        <CurrentlyPlaying song={state.currentSong} />
      </div>
      <div className="flex-1 md:w-2/3">
        <Playlist
          items={state.playlist}
          currentSong={state.currentSong}
          onSongSelect={handleSongSelect}
        />
      </div>
    </div>
  );
}
