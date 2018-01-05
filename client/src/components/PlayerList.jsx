import React from 'react';
import PlayerListEntry from './PlayerListEntry.jsx'

var PlayerList = (props) => (

		<div className="container">
			{	props.list && props.list.map(entry =>  
				<PlayerListEntry player={entry} />
				)}
		</div>
	

)

export default PlayerList;