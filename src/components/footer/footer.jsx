import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import CartIcon from './image/class.jpg';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function footer() {
    return (
    <Container>
        <Card className="text-center">
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
          </Card.Body>
        </Card>
        </Container>
      );
}

export default footer