import React from 'react'
import { Form, Button, Label, Header, Modal } from 'semantic-ui-react'
// let's make our edit modal nice using Semantic-ui-react
// https://react.sematic-ui.com/modules/modal/

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
					<Modal.Actions>
						<Button color={"green"} type="Submit">Update Dog</Button>
					</Modal.Actions>
				</Form>
			</Modal.Content>
		</Modal>
	)
}

export default EditDogModal