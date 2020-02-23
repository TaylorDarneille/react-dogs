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

	render() {
		  return (
		    <div className="App">
		    { this.state.loggedIn ? <DogContainer /> : <LoginRegisterForm /> }
		    </div>
		  );	
	}

}

export default App;
