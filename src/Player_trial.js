
import  React,{ useState } from 'react';
import Sidebar from './SideBar'
import  Now_playing from './Now_Playing';
import "./Player.css"

// replacement for <Body />
import Body from './Body';


//Replacement for Footer
import Footer from "./Footer"
import "./Footer.css"
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';

import LinearDeterminate from './LinearDeterminate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import  Row_menu  from './Row_menu';
import { ArrowBackSharp, PrintSharp } from '@material-ui/icons';

import {db ,auth , storage } from "./firebase.js"

var song_element = document.createElement("AUDIO");
song_element.className = "MyAudio"
let song_duration = 0;


function Player_trial(props){
	const [state,setState] = useState({
		CurrSong: props.list[2],
		CurrIdx: 2,
		isPlaying: true,
	})
	const [list,setList] = useState(props.list);
	const [progress,setProgress] = useState(0);
	const action = (dispatch,idx) => {
		if(dispatch == "Change Song"){
			if(idx < 0 || idx >= list.length)return ;
			setProgress(0);
			setState({
				CurrSong:props.list[idx],
				CurrIdx:idx,
				isPlaying: true,
				})
		}
		if(dispatch == "Change Favorite"){
			const arr = [...list];
			arr[idx].favorites ^= 1;
			setList(arr);
		}
		if(dispatch == "Play/pause"){
			let audioTag = idx;
			const z = state.isPlaying;
			setState(prevState => ({
				...prevState,
				isPlaying:!z
				,
			}))
			console.log(z);
		}
	}
    return (
	<div className="__Player">
		<div className="_player_body">
	    	<div className="__Sidebar">	<Sidebar />	</div>
			<div className="__Body"> <Body list={list} dispatch={action} /> </div>
		</div>
	    {<Footer 
		currentPlaying={state.CurrSong} 
		changeCurrSong={action} 
		currentIndex={state.CurrIdx} 
		progress={progress} 
		setProgress={setProgress}
		duration={state.CurrSong.duration}
		isPlaying={state.isPlaying} />}
	</div>
	
    );
};

export default Player_trial;
