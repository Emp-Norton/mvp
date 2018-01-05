import React from 'react';



var PlayerListEntry = (props) => (
	
		<div className="playerEntry" onClick={ () => {
			console.log('this should render playerinfo component')
			props.moreInfo(props.player.steamId);
		}}> 

      <div className="playerImage">
      	<img src={props.player.imgUrl} alt="Uh-oh! No image found."/>
      </div>
      <hr/>
      <p> Username: {props.player.uname} </p>
      
		</div>
	)


export default PlayerListEntry;