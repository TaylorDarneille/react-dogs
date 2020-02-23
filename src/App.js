import React, { Component } from 'react';
import DogContainer from './DogContainer'
import LoginRegisterForm from './LoginRegisterForm'

class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			loggedIn: false,
			loggInUserEmail: null // might be helpful to track something like email or username so we can show something like "logged in as taylor@taylor.com"
		}
	}

	register = async (registerInfo) => {
		console.log("register() in app.js called with the following info", registerInfo)
	}

	login = async (loginInfo) => {
		console.log("login() in app.js called with the following info", loginInfo)
	}

	render() {
		  return (
		    <div className="App">
		    { 
		    	this.state.loggedIn 
		    	? 
		    	<DogContainer /> 
		    	: 
		    	<LoginRegisterForm 
		    		register={this.register}
		    		login={this.login}
		    	/> }
		    </div>
		  );	
	}

}

export default App;
