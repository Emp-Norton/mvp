import React from 'react';
import GameListEntry from './GameListEntry.jsx'

var GameList = (props) => (
		<div>
			{props.games && props.games.map(game =>
				<GameListEntry game={game} />
			)}
		</div>
	)

export default GameList;