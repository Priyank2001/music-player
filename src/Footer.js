import React from 'react'
import { useState } from 'react';
import "./Footer.css"
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import ReactAudioPlayer from 'react-audio-player';
import Slider from '@mui/material/Slider'
import {styled} from '@mui/styles';
// var aud = new Audio();
function Footer({aud , currentPlaying, changeCurrSong , currentIndex , progress , duration ,setProgress ,isPlaying}) {
    const [position,setPosition] = useState(33);
    const url = `${currentPlaying.src}.mp3`;
    const [diff,setDiff] = useState(isPlaying ? 100/duration : 0 );
    // aud.src = url;
    // aud.autoplay = true;
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          return 100;
        }
        return Math.min(oldProgress + diff, 100);
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [progress]);
    return (
        
        <div className = "__Footer" > 
           <div className="__Footer_left">
                <div className="__Footer_left_img">
	    	<img className="__Footer_left_imgtag" src={currentPlaying.img_src} />
                </div>
	    	<div className="__Footer_left_info">
                    <h4>{currentPlaying.title}</h4>
                    <p>{currentPlaying.artist}</p>
                </div>
            </div>
           <div className="__Footer_center">
                <div className='__Footer_center_slider'>
                    <Slider min={0} max={100} value={progress} onChange={(_, value) => setPosition(value)}/>
                </div>
                <div className= "__Footer_center_icons">
                <a onClick={(e) => {e.preventDefault();changeCurrSong("Change Song", currentIndex == 0 ? 0 :  currentIndex - 1 );}}><SkipPreviousIcon className="_icon_skip" /></a>
                <a onClick={(e) => {
                    e.preventDefault();
                    var x = document.getElementById("_myAudio");
                    changeCurrSong("Play/pause",x);
                    setDiff(isPlaying ? 100/duration : 0)
                }} >
                    <PlayCircleFilledWhiteIcon className="_icon_play" />
                    </a>
                <a onClick={(e) => {e.preventDefault();changeCurrSong("Change Song", currentIndex + 1 );}}><SkipNextIcon className="_icon_next" /></a>
                </div>
           </div>
            
           <div className="__Footer_right">footer right</div>
            <ReactAudioPlayer  id= "_myAudio" src={url} autoPlay  />
            {/* <audio src={url} id="_myAudio" autoPlay > </audio> */}
            {/* </audio>*/}
        </div>
    )
}


export default Footer
