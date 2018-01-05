import React from 'react';


var PlayerListEntry = (props) => (
	
		<div className="playerEntry" onClick={ () => {
			props.moreInfo(props.player.uname); // get individual user info
		}}> 

      <div className="playerImage">
      	<img src="https://vignette.wikia.nocookie.net/happytreefanon/images/8/8e/Luigi-circle.jpg/revision/latest?cb=20131120144656" alt="Uh-oh! No image found."/>
      </div>
      <hr/>
      <p> Username: {props.player.uname} </p>
      
		</div>
	)


export default PlayerListEntry;