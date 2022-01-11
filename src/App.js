import { useState ,useEffect } from 'react';
import Auth from './Auth'
import './App.css';

import Login from "./Login"; 
/*
 
 class Song{
  constructor(Title,Artist,Img, Src,id,fav){
    this.title = Title;
    this.artist = Artist;
    this.img_src = Img;
    this.src = Src;
    this.ID =id;
    this.is_fav = fav; 
  }
}
*/
let addr = "http://192.168.0.101:8080/music/";
function App() {
  let curr = 0;
  
  const [songs , setSongs] = useState(
    [
      {
        title: "Sick Boy"
        , artist: "The Chainsmokers"
        , img_src: "https://images-na.ssl-images-amazon.com/images/I/616yc9rzUOL._AC_SX466_.jpg"
        , src: `${addr}Sick_Boy`
      	, favorites: false
        , duration: 193.985306
        ,
      },
      {
        title: "Starboy"
        , artist: "The Weeknd"
        , img_src: "https://i.pinimg.com/originals/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg"
        , src: `${addr}Starboy` 
	      , favorites: false
        , duration: 231.5755
        ,
      },
      {
        title: "First Time"
        , artist: "Kygo"
        , img_src: "https://images-na.ssl-images-amazon.com/images/I/81BVSz9PqML._AC_UL600_SR600,600_.jpg"
        , src: `${addr}First_Time`
	      , favorites: false
        , duration: 194.406456
        ,
      }
      ,
      {
        title: "All Time Low"
        , artist: "Jon Bellion"
        , img_src: "https://yt3.ggpht.com/ytc/AAUvwnh1KvrMkUKqJKtX_eX7D7RkhmO3XfWCMzYKOg4hXQ=s900-c-k-c0x00ffffff-no-rj"
        , src: `${addr}All_Time_Low`
	      , favorites: false
        , duration: 217.581878
        ,
      }
      ,
      {
        title: "You're the Best Thing About Me"
        , artist: "Kygo"
        , img_src: "https://images-na.ssl-images-amazon.com/images/I/81BVSz9PqML._AC_UL600_SR600,600_.jpg"
        , src: `${addr}You're_the_Best_Thing_About_Me`
	      , favorites: false
        , duration: 257.7534
        ,
      }
      ,
      {
        title: "It Ain't Me"
        , artist: "Kygo"
        , img_src: "https://images-na.ssl-images-amazon.com/images/I/81BVSz9PqML._AC_UL600_SR600,600_.jpg"
        , src: `${addr}It_Ain't_Me`
	      , favorites: false
        , duration: 220.630204
        ,
      }
      ,
      {
        title: "This Town"
        , artist: "Kygo"
        , img_src: "https://images-na.ssl-images-amazon.com/images/I/81BVSz9PqML._AC_UL600_SR600,600_.jpg"
        , src: `${addr}This_Town`
	      , favorites: true
        , duration: 202.347678
        ,
      }
      ,
      {
        title: "Stargazing"
        , artist: "Kygo"
        , img_src: "https://images-na.ssl-images-amazon.com/images/I/81BVSz9PqML._AC_UL600_SR600,600_.jpg"
        , src: `${addr}Stargazing`
	      , favorites: false
        , duration: 236.9338,
      }
      ,
      {
        title: "Where Are You Now"
        , artist: "Skrillex,Diplo and Jack Ü"
        , img_src: "https://static.wikia.nocookie.net/justin-bieber/images/f/f6/Skrillex_and_Diplo_Present_Jack_%C3%9C.jpg"
        , src: `${addr}Stargazing`
	      , favorites: false
        , duration: 236.9338
        ,
      }
      ,
    ]

  )
	const makeChanges = (action,idx) => {
		if(action == "Change Favorite"){
			const arr = songs;
			arr[idx].favorites = !arr[idx].favorites; 
			setSongs(arr);
			console.log(songs);
		}
	}  
  // useEffect({

  // },[songs])
 
   var elem = 
     (<div className="App">
      <Login list={songs} makeChanges={makeChanges} />
      {/* <Login_n /> */}
      {/* <Auth /> */}
      </div>)
    ;
  return elem;
  

}

//ReactDOM.render(
//  <Player />,
//  document.getElementById("root"));
export default App;
