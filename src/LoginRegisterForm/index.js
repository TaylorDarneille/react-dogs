import React, { Component } from 'react';
import { Form, Button, Label } from 'semantic-ui-react'
import './index.css'

class LoginRegisterForm extends Component {

	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: '',
			username: '',
			action: 'login' // login or register
		}
	}

	switchForm = () => {
		if(this.state.action === 'login') {
			this.setState({ action: 'register' })
		} else {
			this.setState({ action: 'login' })
		}
	}

	render() {
		  return (
		  	<div className="LoginRegisterForm">
		  		<h2 className="LoginRegisterForm-h2">{this.state.action+' here'}</h2>
				<Form>
					{
						// only show username field if they are registering bc our back end only uses email for login
						this.state.action === 'register'
						?
						<React.Fragment>
							<Label>Username:</Label>
							<Form.Input 
							type="text"
							name="username"
							placeholder="Enter username"
							value={this.state.username}
							/>
						</React.Fragment>
						:
						null
					}
					<Label>Email:</Label>
					<Form.Input 
						type="text"
						name="email"
						placeholder="Enter email"
						value={this.state.email}
					/>
					<Label>Password:</Label>
					<Form.Input 
						type="text"
						name="password"
						placeholder="Enter password"
						value={this.state.password}
					/>
					<Button type="Submit">{this.state.action === 'register' ? 'Register' : 'Login'}</Button>
				</Form>
				{
					this.state.action === 'register'
					?
					// they see this on register screen
					<small>Already have an account? Login <span className="fake-link" onClick={this.switchForm}>here</span>.</small>
					:
					// And this on login screen
					<small> Need an account? Sign up <span className="fake-link" onClick={this.switchForm}>here</span>!</small>

				}
			</div>
		  );	
	}

}

export default LoginRegisterForm;
