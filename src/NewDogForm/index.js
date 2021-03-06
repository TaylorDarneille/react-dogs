import React, { Component } from 'react'
import { Form, Button, Label, Segment } from 'semantic-ui-react'

class NewDogForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			breed: ''
		}
	}

	handleChange = (event) => {
		// ES6 computed properties syntax or compute proper names
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = (event) =>  {
		event.preventDefault()
		console.log("HELLO!!!!!!!")
		this.props.createDog(this.state)
		
		console.log("HELLO number 2")
		this.setState({
			name: '',
			breed: ''
		})
	}

	render() {
		// console.log("this.state in render() in NewDogForm")
		// console.log(this.state);
		return (
			<Segment>
				<h4>Add new dog:</h4>
				<Form onSubmit={this.handleSubmit}>
					<Label>Name:</Label>
					<Form.Input
						type="text"
						name="name"
						value={this.state.name}
						onChange={this.handleChange}
						placeholder={"Enter name"}
					/>
					<Label>Breed:</Label>
					<Form.Input
						type="text"
						name="breed"
						value={this.state.breed}
						onChange={this.handleChange}
						placeholder={"Enter breed"}
					/>
					<Button type="Submit">Create Dog</Button>
				</Form>
			</Segment>
		)
	}
}

export default NewDogForm