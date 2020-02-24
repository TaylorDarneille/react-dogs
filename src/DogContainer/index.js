import React, { Component } from 'react'
import DogList from '../DogList'
import NewDogForm from '../NewDogForm'
import EditDogModal from '../EditDogModal'

class DogContainer extends Component {

	// what props are we going to use in the constructor?
	constructor(props) {
		super(props)

		this.state = {
			dogs: [],
			editModalOpen: false,
			// this will be the data we are editing with the form in the modal
			dogToEdit: {
				name: '', 
				breed: '',
				id: ''
			}
		}
	}

	// component lifecycle methods should always be defined as class methods
	componentDidMount() {
		// get the dogs when the component mounts
		this.getDogs()
	}

	// the word "async" before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically.
	// more on this: https://javascript.info/async-await
	getDogs = async () => {
		try {
			// the keyword await makes JS wait until that promist settles and returns its result
			const dogsResponse = await fetch(process.env.REACT_APP_API_URL + "/api/v1/dogs/",
			{
				// you must send cookie everytime for back end ot know you are logged in
				credentials: 'include'
			})
			const dogsJson = await dogsResponse.json()
			// logging the results you get back from an API and drillign down into the object to make sure you are putting the thing you mean to be putting into stat is important
			console.log("here is the data we got in getDogs in DogContainer");
			console.log("dogsJson:", dogsJson);
			this.setState({
				dogs: dogsJson.data
			})	
		} catch(err) {
			// catches errors both in fetch and in response.json
			console.log(err)
		}
	}

	createDog = async (dogToAdd) => {
		console.log("Form submission")
		console.log(dogToAdd)

		try {
			// cusotmize fetch according to https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
			// do this by passing in a second arg after the URL --
				// an object containing various configuration
			// so we can sen da. POST request with JSON as the body
			// request body will be dogToAdd
			// we also need to set a header when we send json Content-Type: application/json
		
			const createDogResponse = await fetch(process.env.REACT_APP_API_URL+'/api/v1/dogs/', {
				credentials: 'include',
				method: 'POST',
				body: JSON.stringify(dogToAdd), // this is how you convert an object to JSON)
				headers: {
					'Content-Type': 'application/json'
				}
			})
			const createDogJson = await createDogResponse.json()
			// write some kind of logic on something about the response to determin if and how to update screen
			if(createDogResponse.status === 201) {
				//there are many ways we could cause the dog to appear on screen
				// 1. quick and dirty -- call getDogs
				// -- requires a second fetch call, more time, more bandwith
				// -- you already have ralmost all of the data you need except hte new dog
				// this.getDogs()

				//2. manually add the dog to state -- more elegant, you don't need the 2nd call
				// always be sure to use the actual object from database
				// no data is real except data in database
				// const state = this.state
				// state.dogs.push(createDogJson.data)
				// this.setState(state)

				// 3. use spread operator
				// ... this.state.dogs means " all the dogs that are already in this array"
				this.setState({
					dogs: [...this.state.dogs, createDogJson.data]
				})
			}
		} catch (err) {
			console.log(err)
		}
	}

	deleteDog = async (id) => {
		console.log("trying to delete dog with id", id)
		try {
			const deleteDogResponse = await fetch(process.env.REACT_APP_API_URL+"/api/v1/dogs/"+id+"/", {
				credentials: 'include',
				method: 'DELETE'
			})
			const deleteDogJson = await deleteDogResponse.json()
			console.log("here's response when we tried to delete a dog")
			console.log(deleteDogJson)

			// dog is now deleted from db but still showing on screen, so we have to fix our state to reflect the change
			if(deleteDogJson.status===200) {
				this.setState({
					//only the dogs who id ISNT the one we just tried to delete
					dogs: this.state.dogs.filter(dog => dog.id !== id)
				})
			} else {
				throw new Error("Could not delete dog")
			}
		} catch(err) {
			console.log(err)
		}
	}

	editDog = (idOfDogToEdit) => {
		// console.log("heres the id of the dog we want to edit")
		// console.log(idOfDogToEdit)
		// console.log()
		const dogToEdit = this.state.dogs.find((dog)=>dog.id===idOfDogToEdit)
		this.setState({
			editModalOpen: true,
			dogToEdit: {
				...dogToEdit
				// the line above is using the spread operator to represent the 4 lines below
				// name: dogToEdit.name,
				// owner: dogToEdit.owner,
				// breed: dogToEdit.breed,
				// id: dogToEdit.id
			}
		})
	}

	handleEditChange = (event) => {
		// this is a 100% awesome way to solve this problem
		// const dog = this.state.dogToEdit
		// dog[even.target.name] = event.target.value
		// this.setState({ dogToEdit: dog })

		// but often React dves will use fancy new syntax like this to show off
		this.setState({
			dogToEdit: {
				...this.state.dogToEdit, // copy all old properties from object in state usign spread operator
				[event.target.name]: event.target.value // replace the old value for whatever was editted for the new value
			}
		})		
	}

	handleSubmitEditForm = (e) => {
		e.preventDefault()
		this.updateDog()
	}

	updateDog = async () => {
		try {
			const updateDogResponse = await fetch(process.env.REACT_APP_API_URL+"/api/v1/dogs/"+this.state.dogToEdit.id+'/',
				{
					credentials: 'include',
					method: 'PUT',
					body: JSON.stringify(this.state.dogToEdit),
					headers: { 'Content-Type': 'application/json'}
				})
			const updateDogJson = await updateDogResponse.json()
			if(updateDogResponse.status==200) {
				const newDogArrayWithUpdatedDog = this.state.dogs.map((dog)=>{		
					if(dog.id === updateDogJson.data.id) {
						return updateDogJson.data
					} else {
						return dog
					}
				})
				this.setState({ dogs: newDogArrayWithUpdatedDog })
				this.closeModal()
			}		
		} catch(err) {
			console.log(err)
		}

	}

	closeModal = () => {
		this.setState({
			editModalOpen: false
		})
	}

	render() {
		console.log("DogContainer state:", this.state);
		return(
			<>
				<DogList dogs={this.state.dogs} deleteDog={this.deleteDog} editDog={this.editDog} />
				<NewDogForm createDog={this.createDog}/>
				<EditDogModal 
					open={this.state.editModalOpen}
					dogToEdit={this.state.dogToEdit}
					updateDog={this.updateDog}
					closeModal={this.closeModal}
					handleEditChange={this.handleEditChange}
					handleSubmitEditForm={this.handleSubmitEditForm}
				/>
			</>
		)
	}
}

export default DogContainer