import React from 'react';

var RegisterPlayer = (props) => (
	<div>
	<h3> New Player Registration </h3>
		<input type="text" id="registerSteamIdField" placeholder="Input Steam ID"/>
		<button id="registerSubmit"> Sign me up!</button>
		<hr/>
		<input type="text" id="registerPlaystyle" placeholder="1-5 how seriously do you play?"/>
	
	</div>
	)




export default RegisterPlayer;