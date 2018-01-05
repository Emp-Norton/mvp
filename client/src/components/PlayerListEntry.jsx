import React from 'react';



var PlayerListEntry = (props) => (
	
		<div className="playerEntry" onClick={ () => {
			props.moreInfo(props.player.uname); // get individual user info
		}}> 

      <div className="playerImage">
      	<img src={props.player.imgUrl} alt="Uh-oh! No image found."/>
      </div>
      <hr/>
      <p> Username: {props.player.uname} </p>
      
		</div>
	)


export default PlayerListEntry;