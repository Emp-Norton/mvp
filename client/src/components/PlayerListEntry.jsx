import React from 'react';



var PlayerListEntry = (props) => (
	

		<div className="playerEntry">

      <p> Username: {props.player.uname} </p>
      <hr/>
      <div className="playerImage">
      	<img src={props.player.imgUrl} alt="Uh-oh! No image found."/>
      </div>
		</div>
	)


export default PlayerListEntry;