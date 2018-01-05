import React from 'react';
import ReactDOM from 'react-dom';
import GameList from './GameList.jsx';

var PlayerInfo = (props) => (
	<div>
		<h1> {props.player.uname} </h1>
		<img src={props.player.imgUrl} alt="picture goes here" />
		<div className="gameList">
			{
				<GameList games={props.player.games} />
			}
		</div>
	</div>
	)

export default PlayerInfo;