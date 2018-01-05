import React from 'react';
import ReactDOM from 'react-dom';
import GameList from './GameList.jsx';
import $ from 'jquery';
import PlayerList from './PlayerList.jsx'
import NoMatches from './NoMatches.jsx'
import App from '../index.jsx'


var PlayerInfo = (props) => (
	<div>
		<h1> {props.player.uname} </h1>
		<p> Steam ID: {props.player.steamId} </p>
		<img src='https://vignette.wikia.nocookie.net/happytreefanon/images/8/8e/Luigi-circle.jpg/revision/latest?cb=20131120144656' alt="picture goes here" />
		<div>
		<button className="home" onClick={ () =>{
				ReactDOM.render(<App />, document.getElementById('app'))
	  	}}> Back to list </button>
			<button className="makePlayerMatch" onClick={ () => {
				$.get(`/matches/${props.player.uname}`, function(data){
					if (data.length){
						ReactDOM.render(<PlayerList list={data} getPlayerInfo={props.getPlayerInfoByUsername} />, document.getElementById('app'))
					} else {
						ReactDOM.render(<NoMatches />, document.getElementById('app'))
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