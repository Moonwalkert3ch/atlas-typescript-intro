import { CurrentlyPlaying } from "./components/CurrentlyPlaying";
import Playlist from "./components/Playlist";

export default function MusicPlayer() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-1 md:w-1/3">
        <CurrentlyPlaying />
      </div>
      <div className="flex-1 md:w-2/3">
        <Playlist />
      </div>
    </div>
  );
}