
import { PlayListItem } from './PlayListItem';

// Define types for Playlist props
interface PlaylistProps {
  items: {
    id: string;
    title: string;
    artist: string;
    songLength: string;
  }[];
  currentSong: {
    id: string;
    title: string;
    artist: string;
    songLength: string;
  } | null;
  onSongSelect: (song: { id: string; title: string; artist: string; songLength: string }) => void;
}

export function Playlist({ items, currentSong, onSongSelect }: PlaylistProps) {
  return (
    <div className="flex w-1/2 flex-col md:flex-row bg-light-red border-t p-6 sm:w-full md:border-l md:border-t-0">
      <h2 className="mb-4 text-lg font-semibold text-black">Playlist</h2>
      <div className="flex flex-col pr-4">
        {items.map((item) => (
          <PlayListItem
            key={item.id}
            title={item.title}
            artist={item.artist}
            songLength={item.songLength}
            className={currentSong?.id === item.id ? 'bg-gray-200' : ''}
            onClick={() => onSongSelect(item)}
          />
        ))}
      </div>
    </div>
  );
}
