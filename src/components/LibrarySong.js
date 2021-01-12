import React from "react";
import { playAudio } from "../util";

const LibrarySong = ({
  name,
  artist,
  cover,
  id,
  setCurrentSong,
  songs,
  audioRef,
  isPlaying,
  setSongs,
  active,
  isDark
}) => {
  const songSelectHandler = () => {
    const selectedSong = songs.filter((state) => state.id === id);
    setCurrentSong({ ...selectedSong[0] });
    //Set Active in library
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);

    //Play audio
    playAudio(isPlaying, audioRef);
  };
  console.log(isDark);
  return (
    <div
      onClick={songSelectHandler}
      className={` ${isDark ? "library-song-dark" : "library-song"} library-song ${active ? `${isDark ? "selected-dark" : "selected"}` : ""} `}
    >
      <img src={cover} alt="" />
      <div className={`${isDark ? "song-description-dark" : "song-description "} `} >
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;