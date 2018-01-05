import React from 'react';
import $ from 'jquery';


var RegisterPlayer = (props) => (
	<div>
	<h1>{props.notfound}</h1>
	<h3> New Player Registration </h3>
		<input type="text" id="registerUsernameField" placeholder="Enter username"/>

		<input type="text" id="registerSteamIdField" placeholder={props.sid || "Enter Steam ID"}/>
		<button id="registerSubmit" onClick={ () => {
			var uname = $('#registerUsernameField').val();
			var steamid = $('#registerSteamIdField').val().length ? $('#registerSteamIdField').val() : props.sid
			var playstyle = $('#registerPlaystyle').val().length ?  $('#registerPlaystyle').val() : 3
			var newPlayer = {
				uname: uname,
				steamId: steamid,
				games: [],
				playstyle: playstyle
			}
			props.register(newPlayer)
		}}> Sign me up!</button>
		<hr/>
		<p>How seriously do you take your gameplay, on a scale from 1 to 5? </p>
		<ol>
			<li> Meh. I'm mostly here to goof around. </li>
			<li> I'm not that serious, but winning is definitely more fun </li>
			<li> I like a balance of silly and serious. </li>
			<li> Get your game face on, soldier! </li>
			<li> I live for this shit. </li>
		</ol>
		<input type="text" id="registerPlaystyle" placeholder="input rating here"/>
	
	</div>
	)




export default RegisterPlayer;