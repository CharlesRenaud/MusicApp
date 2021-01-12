import React from "react";

import LibrarySong from "./LibrarySong";
const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
  isDark
}) => {
   
  return (
    <div className={`${isDark ? "library-dark" : "library "}  ${libraryStatus ? "active-library" : " "}`}>
      <h2>Playlist</h2>
      <div className="library-songs">
        { 
        songs.map((song) => (
          <LibrarySong
            songs={songs}
            cover={song.cover}
            name={song.name}
            artist={song.artist}
            active={song.active}
            key={song.id}
            id={song.id}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
            isDark={isDark}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;