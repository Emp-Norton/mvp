import React from 'react';
import PlayerListEntry from './PlayerListEntry.jsx'

var PlayerList = (props) => (

		<div className="container">
			{	props.list && props.list.map(entry =>  
				<PlayerListEntry player={entry} moreInfo={props.getPlayerInfo} />
				)}
		</div>
	

)

export default PlayerList;