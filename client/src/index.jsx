import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class App extends React.Component{
	constructor(props){
		super(props)
		this.state = {};
	}

	render(){
		return (
			<div> hi sdfs </div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))