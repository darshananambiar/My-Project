import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Todo = () => {
  return (
    <div>
      <Container>
      
      <Row>
        <Col sm>
        <input type= "text" placeholder='enter to do here'/></Col>
        <Col sm><input type="date" /></Col>
        <Col sm><Button variant="success">Add</Button></Col>
      </Row>

      <Row>
        <Col sm>Buy Milk</Col>
        <Col sm>4/10/2023</Col>
        <Col sm><Button variant="danger">Danger</Button>{' '}</Col>
      </Row>

      <Row>
        <Col sm>Go to college</Col>
        <Col sm>3/70/2014</Col>
        <Col sm><Button variant="danger">Danger</Button>{' '}</Col>
      </Row>
    </Container>

    </div>
  )
}

export default Todo
