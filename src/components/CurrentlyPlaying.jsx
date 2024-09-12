import { CoverArt } from "./CoverArt";
import { SongTitle } from "./SongTitle";
import { PlayControls } from "./PlayControls";
import { VolumeControl } from "./VolumeControls";

export function CurrentlyPlaying() {
    return (
        <div className='flex flex-col space-y-6'>
            <CoverArt />
            <SongTitle />
            <PlayControls />
            <VolumeControl />
        </div>
    );
}