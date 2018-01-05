import React from 'react';
import ReactDOM from 'react-dom';
import GameList from './GameList.jsx';
import $ from 'jquery';


var PlayerInfo = (props) => (
	<div>
		<h1> {props.player.uname} </h1>
		<img src={props.player.imgUrl} alt="picture goes here" />
		<div>
			<button className="makePlayerMatch" onClick={ () => {
				console.log('this should find matches for this player')
				$.get(`/matches/${props.player.uname}`, function(data){
					console.log('bingo', data)
					//props.update(data);
				})
			}
			}>Find matching players!</button>
		</div>
		<div className="gameList">
			{
				<GameList games={props.player.games} />
			}
		</div>
		Playstyle Signature: {props.player.playstyle}
	</div>
	)

export default PlayerInfo;