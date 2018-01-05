import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import PlayerList from './components/PlayerList.jsx'
import PlayerInfo from './components/PlayerInfo.jsx'
import RegisterPlayer from './components/RegisterPlayer.jsx'




class App extends React.Component{
	constructor(props){
		super(props)
		this.state = {};
		this.getPlayers = this.getPlayers.bind(this);
	}

	componentDidMount(){
		console.log('getting player list')
		this.getPlayers();
	}

	updateMatches(matchesArray){
		console.log(matchesArray);
	}

	getPlayers(){
		var app = this;
		$.get('/users', function(data){
			console.log('got list')
				app.setState({players: data})
		})
	}

		getPlayerInfoBySteamId(steamid){
		console.log('looking for ', steamid)
		$.get(`/users/${steamid}`, function(data){
			console.log(data)
			if (typeof data === "object" && data.length){
				var player = data[0];
				ReactDOM.render(<PlayerInfo update={this.updateMatches} player={player} />, document.getElementById('app'))
			}
			console.log('player not found') // display 'register' component ?
			$('#searchUsersField').val('');
		})
	}

	getPlayerInfoByUsername(username){
		console.log('looking for ', username)
		$.get(`/users/${username}`, function(data){
			console.log(data)
			if (typeof data === "object" && data.length){
				var player = data[0];
				ReactDOM.render(<PlayerInfo update={this.updateMatches} player={player} />, document.getElementById('app'))
			} else {
				console.log('player not found') // display 'register' component ?
			}
			
			$('#searchUsersField').val('');
		})
	}

	registerPlayer(steamid){
		$.post('/', {steamid}, function(data){
			if (typeof data === "object"){
				ReactDOM.render(<PlayerInfo update={this.updateMatches} player={data} />, document.getElementById('app'))
			} else {
				ReactDOM.render(<RegisterPlayer />, document.getElementById('app'))
			}
		})
	}

	render(){
		return (
			<div> 
			<div className="registerUserForm">
				<input type="text" placeholder="enter steamid" id="registerSteamId"/>
				<button id="registerUser" onClick={ () => {
					this.registerPlayer($('#registerSteamId').val())
				}
				}> Register a new user </button>
			</div>
			<div className="searchUsersForm">
				<input type="text" id="searchUsersField" placeholder="enter a username"/>
				<button id="searchUsers" onClick={ () => {
					this.getPlayerInfoByUsername($('#searchUsersField').val()); // by id or un?
				}
				}> Search for user </button>
			</div>
				<PlayerList list={this.state.players} update={this.updateMatches} getPlayerInfo={this.getPlayerInfoByUsername} />
		  </div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))