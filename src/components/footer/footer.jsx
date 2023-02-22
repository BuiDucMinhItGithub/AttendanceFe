import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import CartIcon from './image/class.jpg';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function footer() {
    return (
      <Container>
        <div className='footer-custom'>
          <span >
            Powered by <p><b>Bui Duc Minh</b></p>
          </span>
        </div>
      </Container>
      );
}

export default footer