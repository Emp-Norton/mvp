import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import PlayerList from './PlayerList.jsx'
import App from '../index.jsx'

var NoMatches = (props) => (
	<div>
	<h1> No matches found! </h1>
	<p> </p>
	<button className="home" onClick={ () =>{
			ReactDOM.render(<App />, document.getElementById('app'))
	  }}> Back to Main </button>
	</div>
	)


export default NoMatches