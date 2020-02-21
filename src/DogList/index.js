import React from 'react'
import { Card, Button } from 'semantic-ui-react'

function DogList(props) {
	const dogs = props.dogs.map((dog) => {
		let colors = ["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"]
		let color = colors[Math.floor(Math.random()*colors.length)-1]
		console.log("color:", color);
		return (
			<Card key={dog.id} centered={true} color={color} >
				<Card.Content>
					<Card.Header>
						{dog.name}
					</Card.Header>
					<Card.Description>
						{dog.name} is a {dog.breed} that belongs to {dog.owner}
					</Card.Description>
				</Card.Content>
				<Card.Content extra>
					<Button onClick={() => props.deleteDog(dog.id)}>Delete Dog</Button>
				</Card.Content>
			</Card>
		)
		// return <li key={dog.id}>{dog.name} is a {dog.breed} that belongs to {dog.owner}</li>
	})
	return (
		<ul>
			<Card.Group>
				{dogs}
			</Card.Group>
		</ul>
	)
}

export default DogList