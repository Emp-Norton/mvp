import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import PlayerList from './components/PlayerList.jsx'


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



	render(){
		return (
			<div> 
				<PlayerList list={this.state.players} />
		  </div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))