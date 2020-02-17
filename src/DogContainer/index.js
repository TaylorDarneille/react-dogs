
//where are we going to use React?
import React, { Component } from 'react'

class DogContainer extends Component {

	// what props are we going to use in the constructor?
	constructor(props) {
		super(props)

		this.state = {
			dogs: []
		}
	}

	render() {
		return(
			"Dog Container"
		)
	}

}

export default DogContainer