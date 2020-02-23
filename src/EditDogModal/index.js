import React from 'react'
import { Form, Button, Label, Header, Modal } from 'semantic-ui-react'
// let's make our edit modal nice using Semantic-ui-react
// https://react.sematic-ui.com/modules/modal/

// class EditDogModal extends Component {
// 	constructor() {
// 		super()
// 		this.state = {
// 			name: '',
// 			breed: '',
// 			owner: ''
// 		}
// 	}

// 	componentDidMount() {
// 		console.log("EditDogModal: componentDidMount")
// 		console.log("EditDogModal props:", this.props);
// 		// notice -- in DogContainer -- we are rendering EditDogModal all teh time instead of conditionally
// 		// so 2 problems
// 		// (a) it "mounts" even when it isn't "showing"
// 		// (b) componentDidMount no longer fires when we re-open it
// 		// this means our form is empty
// 		this.setState({
// 			name: this.props.dogToEdit.name,
// 			breed: this.props.dogToEdit.breed,
// 			owner: this.props.dogToEdit.owner
// 		})
// 	}

// 	handleChange = (event) => {
// 		this.setState({[event.target.name]: event.target.value})
// 	}

// 	handleSubmit = (event) => {
// 		event.preventDefault()
// 		this.props.updateDog(this.state)
// 	}

// 	render() {
// 		return(
// 			<Modal open={this.props.open} closeIcon={true} onClose={this.props.closeModal}>
// 				<Header>Edit Dog</Header>
// 				<Modal.Content>
// 					<Form onSubmit={this.handleSubmit}>
// 						<Label>Name:</Label>
// 						<Form.Input 
// 							type="text"
// 							name="name"
// 							value={this.state.name}
// 							placeholder="Enter Dog Name"
// 							onChange={this.handleChange}
// 						/>
// 						<Form.Input 
// 							type="text"
// 							name="breed"
// 							value={this.state.breed}
// 							placeholder="Enter Dog Breed"
// 							onChange={this.handleChange}
// 						/>
// 						<Form.Input 
// 							type="text"
// 							name="owner"
// 							value={this.state.owner}
// 							placeholder="Enter Dog Owner"
// 							onChange={this.handleChange}
// 						/>
// 						<Modal.Actions>
// 							<Button color={"green"} type="Submit">Update Dog</Button>
// 						</Modal.Actions>
// 					</Form>
// 				</Modal.Content>
// 			</Modal>
// 		)
// 	}
// }

function EditDogModal(props) {
	return(
		<Modal open={props.open} closeIcon={true} onClose={props.closeModal}>
			<Header>Edit Dog</Header>
			<Modal.Content>
				<Form onSubmit={props.handleSubmitEditForm}>
					<Label>Name:</Label>
					<Form.Input 
						type="text"
						name="name"
						value={props.dogToEdit.name}
						placeholder="Enter Dog Name"
						onChange={props.handleEditChange}
					/>
					<Form.Input 
						type="text"
						name="breed"
						value={props.dogToEdit.breed}
						placeholder="Enter Dog Breed"
						onChange={props.handleEditChange}
					/>
					<Form.Input 
						type="text"
						name="owner"
						value={props.dogToEdit.owner}
						placeholder="Enter Dog Owner"
						onChange={props.handleEditChange}
					/>
					<Modal.Actions>
						<Button color={"green"} type="Submit">Update Dog</Button>
					</Modal.Actions>
				</Form>
			</Modal.Content>
		</Modal>
	)
}

export default EditDogModal