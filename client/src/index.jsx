import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import PlayerList from './components/PlayerList.jsx'
import PlayerInfo from './components/PlayerInfo.jsx'
import RegisterPlayer from './components/RegisterPlayer.jsx'




export default class App extends React.Component{
	constructor(props){
		super(props)
		this.state = {};
		this.getPlayers = this.getPlayers.bind(this);
	}

	componentDidMount(){
		console.log('getting player list')
		if (!this.state.players){
				this.getPlayers();
		} 
	
	}


	getPlayers(data){
		var app = this;
		if (data){
			app.setState({players: data})
		} else {
			$.get('/users', function(data){
			console.log('got list')
				app.setState({players: data})
		})
		}
		
	}

		getPlayerInfoBySteamId(steamid){
			var app = this;
		console.log('looking for ', steamid)
		$.get(`/users/${steamid}`, function(data){
			console.log(data)
			if (typeof data === "object" && data.length){
				var player = data[0];
				ReactDOM.render(<PlayerInfo getPlayerInfoByUsername={app.getPlayerInfoByUsername} player={player} />, document.getElementById('app'))
			}
			console.log('player not found') // display 'register' component ?
			$('#searchUsersField').val('');
		})
	}

	getPlayerInfoByUsername(username){
		var app = this;
		console.log('looking for ', username)
		$.get(`/users/${username}`, function(data){
			console.log(data)
			if (typeof data === "object" && data.length){
				var player = data[0];
				ReactDOM.render(<PlayerInfo getPlayerInfoByUsername={app.getPlayerInfoByUsername} player={player} />, document.getElementById('app'))
			} else {
				ReactDOM.render(<RegisterPlayer notfound="Player not found. Register?" register={ app.saveToDb}/>, document.getElementById('app'))
			}
			
			$('#searchUsersField').val('');
		})
	}

	saveToDb(playerObject){
		var app = this;
		$.post('/save', {playerObject}, function(data){
			console.log('saved', data)
			ReactDOM.render(<PlayerInfo getPlayerInfoByUsername={app.getPlayerInfoByUsername}  player={data} />, document.getElementById('app'))

		})
	}

	registerPlayer(steamid){
		var app = this;
		$.post('/', {steamid}, function(data){
			if (typeof data === "object"){
				ReactDOM.render(<PlayerInfo getPlayerInfoByUsername={app.getPlayerInfoByUsername}  player={data} />, document.getElementById('app'))
			} else {
				ReactDOM.render(<RegisterPlayer sid={steamid} register={ app.saveToDb}/>, document.getElementById('app'))
			}
		})
	}

	render(){
		return (
			<div className="container"> 
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
				<PlayerList list={this.state.players} getPlayerInfo={this.getPlayerInfoByUsername} />
		  </div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))