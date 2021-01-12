import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ setLibraryStatus, libraryStatus, isDark, setIsDark }) => {
  const openLibraryHandler = () => {
    setLibraryStatus(!libraryStatus);
  };

   const toggleDarkMode = () => {
    if(isDark) {
      setIsDark(false)
    }else{
      setIsDark(true)
    }
    document.body.classList.toggle('body-dark');
    return
  };

  return (
    <nav>
      <h1 onClick={toggleDarkMode} title="Dark Theme" className={isDark ? "site-name-dark" : "site-name"}>DevCarl</h1>
      <button
        className={libraryStatus ? "library-active" : ""}
        onClick={openLibraryHandler}
        className={isDark ? "playlist-btn-dark" : "playlist-btn"}
      >
        Playlist
        <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
      </button>
    </nav>
  );
};

export default Nav;