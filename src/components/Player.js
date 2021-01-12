import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
  faVolumeDown,
  faRandom
} from "@fortawesome/free-solid-svg-icons";

import { playAudio } from "../util";

const Player = ({
  isPlaying,
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
  currentSong,
  songs,
  setCurrentSong,
  setSongs,
  isRandom,
  setIsRandom,
  isDark
  
}) => {
  const [activeVolume, setActiveVolume] = useState(false);
  //UseEffect Update List
  const activeLibraryHandler = (nextPrev) => {
    console.log(nextPrev)
    const newSongs = songs.map((song) => {
      if (song.id === nextPrev.id) {
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
  };
  
  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };
  //Event Handlers
  function getTime(time) {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    console.log(currentIndex)

    //Forward BAck
    if (direction === "skip-forward") {
        if(isRandom) {
          var randomSong2 = songs[Math.floor(Math.random() * songs.length)];
          await setCurrentSong(randomSong2)
          activeLibraryHandler(randomSong2)
          playAudio(isPlaying, audioRef);
        }else{
          await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
          activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
      }
    }
    if (direction === "skip-back") {
        if ((currentIndex - 1) % songs.length === -1) {
          await setCurrentSong(songs[songs.length - 1]);
          activeLibraryHandler(songs[songs.length - 1]);
          playAudio(isPlaying, audioRef);
          return;
        }
        await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
        activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
    }
    if (direction === "random") {
      var randomSong = songs[Math.floor(Math.random() * songs.length)];
      if(!isRandom){
      await setCurrentSong(randomSong)
      activeLibraryHandler(randomSong)
      playAudio(isPlaying, audioRef);
      }
      if(isRandom){
        setIsRandom(false)
        console.log(isRandom)
        console.log(currentSong.id)
      }else{
        setIsRandom(true)
        console.log(isRandom)
      }
      return
    }
    if (isPlaying) audioRef.current.play();
  };
  const changeVolume = (e) => {
    let value = e.target.value;
    audioRef.current.volume = value;
    setSongInfo({ ...songInfo, volume: value });
  };

  return (
    <div className="player">
      <div className={` ${isDark ? "time-control-dark" : "time-control"}`}>
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`,
          }}
          className="track"
        >
          <input
            value={songInfo.currentTime}
            type="range"
            max={songInfo.duration || 0}
            min={0}
            onChange={dragHandler}
          />
          <div style={trackAnim} className={` ${isDark ? "animate-track-dark" : "animate-track"}`}></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-back")}
          className={` ${isDark ? "skip-back-dark" : "skip-back"}`}
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className={` ${isDark ? "play-dark" : "play"}`}
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className={` ${isDark ? "skip-forward-dark" : "skip-forward"}`}
          size="2x"
          icon={faAngleRight}
          onClick={() => skipTrackHandler("skip-forward")}
        />
         <FontAwesomeIcon
          className={`${isDark ? "random-dark" : "random"} ${isRandom ? `${isDark ? "animate-flicker-dark" : "animate-flicker"}` : ""} `}
          size="2x"
          icon={faRandom}
          onClick={() => skipTrackHandler("random")}
          title="Random"
        />
        <FontAwesomeIcon
          size="2x"
          onClick={() => setActiveVolume(!activeVolume)}
          icon={faVolumeDown}
          className={` ${isDark ? "volume-dark" : "volume"}`}
        />
        {activeVolume && (
          <input
            onChange={changeVolume}
            value={songInfo.volume}
            max="1"
            min="0"
            step="0.01"
            type="range"
            className={` ${isDark ? "range-dark" : "range"}`}
          />
        )}
      </div>
    </div>
  );
};

export default Player;