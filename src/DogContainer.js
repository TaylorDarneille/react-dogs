import React, { Component } from 'react'

class DogContainer extends Component {

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