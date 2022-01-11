import React from 'react'
import "./Body.css"
import Header from "./Header"
import SongRow from "./SongRow"
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
let x = 0;

export function val(){
    console.log(x);
 return x;
}

function Body({list , curr , dispatch }){
    let a = false;
    return (
    <div className="__body">
		<Header />
        <div className="_body_songs">
        {list.map((item,i) => <div className="__songRows">
	    <div className="__songRows_details">
            <a onClick={(e) => {e.preventDefault();dispatch("Change Song",i);}} >
            <SongRow key={i+10} title={item.title} photo={item.img_src} artist={item.artist} index={curr} />
            </a>
	    </div>
            <div className="__songRows_icons">
                <a href = "" onClick={(event) => {
                    	event.preventDefault();
			            dispatch("Change Favorite",i);
                }}>
                    {item.favorites ? (<FavoriteIcon />) : (<FavoriteBorderIcon />)}
                    </a>
                </div>
            </div>
            )}
        </div>
    </div>
    );
}

export default Body;
