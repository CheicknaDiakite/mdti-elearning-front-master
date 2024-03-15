import React, { useEffect, useState, useRef } from 'react';

import { Player, ControlBar } from 'video-react';


const sources = {
  sintelTrailer: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
  bunnyTrailer: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
  bunnyMovie: 'http://media.w3.org/2010/05/bunny/movie.mp4',
  test: 'http://media.w3.org/2010/05/video/movie_300.webm'
};

const Video = () => {
  const playerRef = useRef(null);
  const [source, setSource] = useState(sources.bunnyMovie);
  const [playerState, setPlayerState] = useState(null);

  useEffect(() => {
    const handleStateChange = (state) => {
      setPlayerState(state);
    };

    // subscribe state change
    playerRef.current.subscribeToStateChange(handleStateChange);

    // No need for explicit cleanup in a functional component

  }, []); // Le tableau vide [] garantit que useEffect s'exécute uniquement lors du montage initial

  const setMuted = (muted) => () => {
    playerRef.current.muted = muted;
  };

  const play = () => {
    playerRef.current.play();
  };

  const pause = () => {
    playerRef.current.pause();
  };

  const load = () => {
    playerRef.current.load();
  };

  const changeCurrentTime = (seconds) => () => {
    const { currentTime } = playerRef.current.getState().player;
    playerRef.current.seek(currentTime + seconds);
  };

  const seek = (seconds) => () => {
    playerRef.current.seek(seconds);
  };

  const changePlaybackRateRate = (steps) => () => {
    const { playbackRate } = playerRef.current.getState().player;
    playerRef.current.playbackRate = playbackRate + steps;
  };

  const changeVolume = (steps) => () => {
    const { volume } = playerRef.current.getState().player;
    playerRef.current.volume = volume + steps;
  };

  const changeSource = (name) => () => {
    setSource(sources[name]);
    playerRef.current.load();
  };

  return (
    <div>
      <Player ref={playerRef} autoPlay>
        <source src={source} />
        <ControlBar autoHide={false} />
      </Player>
      <div className="py-3">
        <button onClick={play} className="mr-3">
          play()
        </button>
        <button onClick={pause} className="mr-3">
          pause()
        </button>
        <button onClick={load} className="mr-3">
          load()
        </button>
      </div>
      <div className="pb-3">
        <button onClick={changeCurrentTime(10)} className="mr-3">
          currentTime += 10
        </button>
        <button onClick={changeCurrentTime(-10)} className="mr-3">
          currentTime -= 10
        </button>
        <button onClick={seek(50)} className="mr-3">
          currentTime = 50
        </button>
      </div>
      <div className="pb-3">
        <button onClick={changePlaybackRateRate(1)} className="mr-3">
          playbackRate++
        </button>
        <button onClick={changePlaybackRateRate(-1)} className="mr-3">
          playbackRate--
        </button>
        <button onClick={changePlaybackRateRate(0.1)} className="mr-3">
          playbackRate+=0.1
        </button>
        <button onClick={changePlaybackRateRate(-0.1)} className="mr-3">
          playbackRate-=0.1
        </button>
      </div>
      <div className="pb-3">
        <button onClick={changeVolume(0.1)} className="mr-3">
          volume+=0.1
        </button>
        <button onClick={changeVolume(-0.1)} className="mr-3">
          volume-=0.1
        </button>
        <button onClick={setMuted(true)} className="mr-3">
          muted=true
        </button>
        <button onClick={setMuted(false)} className="mr-3">
          muted=false
        </button>
      </div>
      <div className="pb-3">
        <button onClick={changeSource('sintelTrailer')} className="mr-3">
          Sintel teaser
        </button>
        <button onClick={changeSource('bunnyTrailer')} className="mr-3">
          Bunny trailer
        </button>
        <button onClick={changeSource('bunnyMovie')} className="mr-3">
          Bunny movie
        </button>
        <button onClick={changeSource('test')} className="mr-3">
          Test movie
        </button>
      </div>
      <div>State</div>
      {/* <pre>
        <PrismCode className="language-json">
          {JSON.stringify(playerState, null, 2)}
        </PrismCode>
      </pre> */}
    </div>
  );
};

export default Video;
