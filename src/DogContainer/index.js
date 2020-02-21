
//where are we going to use React?
import React, { Component } from 'react'
import DogList from '../DogList'

class DogContainer extends Component {

	// what props are we going to use in the constructor?
	constructor(props) {
		super(props)

		this.state = {
			dogs: []
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
			const dogsResponse = await fetch(process.env.REACT_APP_API_URL + "/api/v1/dogs/")
			const dogsJson = await dogsResponse.json()
			// loggint the results you get back from an API and drillign down into the object to make sure you are putting the thing you mean to be putting into stat is important
			console.log("here is the data we got in getDogs in DogContainer");
			console.log(dogsJson);	
		} catch(err) {
			// catches errors both in fetch and in response.json
			console.log(err)
		}
	}

	render() {
		console.log("here is this.state in render() in DogContainer");
		console.log(this.state);
		return(
			<>
				<p>"Dog Container"</p>
				<DogList />
			</>
		)
	}
}

export default DogContainer