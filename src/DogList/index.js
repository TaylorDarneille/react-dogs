import React from 'react'
import { Card } from 'semantic-ui-react'

function DogList(props) {
	const dogs = props.dogs.map((dog) => {
		return <li key={dog.id}>{dog.name} is a {dog.breed} that belongs to {dog.owner}</li>
	})
	return (
		<ul>
			{dogs}
		</ul>
	)
}

export default DogList