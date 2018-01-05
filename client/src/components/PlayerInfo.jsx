import React from 'react';
import ReactDOM from 'react-dom';
import GameList from './GameList.jsx';
import $ from 'jquery';


var PlayerInfo = (props) => (
	<div>
		<h1> {props.player.uname} </h1>
		<p>ID: {props.player.steamId} </p>
		<img src='https://vignette.wikia.nocookie.net/happytreefanon/images/8/8e/Luigi-circle.jpg/revision/latest?cb=20131120144656' alt="picture goes here" />
		<div>
			<button className="makePlayerMatch" onClick={ () => {
				console.log('this should find matches for this player')
				$.get(`/matches/${props.player.uname}`, function(data){
					if (data.length){
						console.log('bingo', data)
						props.update(data); // passing matched player data to render
					} else {
						console.log('no matches')
					}
		
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