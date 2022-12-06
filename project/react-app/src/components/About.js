import React from 'react'
import person from '../Images/person.png'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
//import '../App.css'

const About = () => {
  return (
    <>
    <div className="container emp-profile">
    <form method="">
          <div className="row">
    <Card className="text-center" style={{ width: '20rem' }}>
      <Card.Img  src={person} alt="not loaded" />
      <Card.Body>
        <Card.Title>Profile View</Card.Title>
        <Card.Text>
        <p className='profile-rating mt-3 mb-5'>Rankings<span>1-10</span></p>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">

        <ListGroup.Item>1</ListGroup.Item>
        <ListGroup.Item>2</ListGroup.Item>
        <ListGroup.Item>3</ListGroup.Item>
      </ListGroup>
      <Card.Body>
       


      </Card.Body>
    </Card>
    </div>
        </form>
    </div>
    
     
     
    </>
  )
}

export default About

