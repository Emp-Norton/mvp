import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import PlayerList from './components/PlayerList.jsx'
import PlayerInfo from './components/PlayerInfo.jsx'


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

	getPlayers(){
		var app = this;
		$.get('/users', function(data){
			console.log('got list')
				app.setState({players: data})
		})
	}

	getPlayerInfo(steamid){
		$.get(`/users/${steamid}`, function(data){
			var player = data[0];
			ReactDOM.render(<PlayerInfo player={player} />, document.getElementById('app'))
		})
	}

	render(){
		return (
			<div> 
			<div className="registerUserForm">
				<input type="text" placeholder="enter steamid"/>
				<button id="registerUser"> Register a new user </button>
			</div>
			<div className="searchUsersForm">
				<input type="text" placeholder="enter a username"/>
				<button id="searchUsers"> Search for user </button>
			</div>
				<PlayerList list={this.state.players} getPlayerInfo={this.getPlayerInfo} />
		  </div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))