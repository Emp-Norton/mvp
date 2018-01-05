import React from 'react';
import ReactDOM from 'react-dom'
import PlayerListEntry from './PlayerListEntry.jsx'
import App from '../index.jsx'



var PlayerList = (props) => (

		<div className="container">
		<button className="home" onClick={ () =>{
				ReactDOM.render(<App />, document.getElementById('app'))
	  	}}> Refresh list </button>
			{	props.list && props.list.map(entry =>  
				<PlayerListEntry player={entry} moreInfo={props.getPlayerInfo} />
				)}
		</div>
	

)

export default PlayerList;