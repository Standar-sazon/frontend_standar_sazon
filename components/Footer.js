
import React from 'react'
import {Card, Container} from 'react-bootstrap'

const Footer = () => {
return (
  <Card style= {{width: '150rem'}} className="text-white" expand="lg">
    <Container>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Container>
  </Card>
  
)
}

export default Footer