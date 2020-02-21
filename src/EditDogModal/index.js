import React, { Component } from 'react'
import { Form, Button, Label, Header } from 'semantic-ui-react'


class EditDogModal extends Component {
	constructor() {
		super()
		this.state = {
			name: '',
			breed: '',
			owner: ''
		}
	}

	componentDidMount() {
		this.setState({
			name: this.props.dogToEdit.name,
			breed: this.props.dogToEdit.breed,
			owner: this.props.dogToEdit.owner
		})
	}

	handleChange = (event) => {
		this.setState({[event.target.name]: event.target.value})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		this.props.updateDog(this.state)
	}

	render() {
		return(
			<Form onSubmit={this.handleSubmit}>
				<Label>Name:</Label>
				<Form.Input 
					type="text"
					name="name"
					value={this.state.name}
					placeholder="Enter Dog Name"
					onChange={this.handleChange}
				/>
				<Form.Input 
					type="text"
					name="breed"
					value={this.state.breed}
					placeholder="Enter Dog Breed"
					onChange={this.handleChange}
				/>
				<Form.Input 
					type="text"
					name="owner"
					value={this.state.owner}
					placeholder="Enter Dog Owner"
					onChange={this.handleChange}
				/>
				<Button color={"green"} type="Submit">Update Dog</Button>
			</Form>
		)
	}
}

export default EditDogModal