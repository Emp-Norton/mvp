import React from 'react';

var GameListEntry = (props) => (
		<div className="gameListEntry">
			{props.game.name}
		</div>
	)

export default GameListEntry;