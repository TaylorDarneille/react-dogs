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
		const url = process.env.REACT_APP_API_URL+'/api/v1/users/register/'

		try {
			const registerResponse = await fetch(url, {
				credentials: 'include', //sends the cookie
				method: 'POST',
				body: JSON.stringify(registerInfo),
				headers: {'Content-Type': 'application/json'}
			})
			console.log(registerResponse);
			const registerJson = await registerResponse.json()
			console.log(registerJson);
		} catch(err) {
			if(err) {
				console.error("err!", err)
			}
		}
	}

	login = async (loginInfo) => {
		console.log("login() in app.js called with the following info", loginInfo)
		const url = process.env.REACT_APP_API_URL+'/api/v1/users/login/'

		try {
			const loginResponse = await fetch(url, {
				credentials: 'include', //sends the cookie
				method: 'POST',
				body: JSON.stringify(loginInfo),
				headers: {'Content-Type': 'application/json'}
			})
			console.log(loginResponse);
			const loginJson = await loginResponse.json()
			console.log(loginJson);
		} catch(err) {
			if(err) {
				console.error("err!", err)
			}
		}
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
