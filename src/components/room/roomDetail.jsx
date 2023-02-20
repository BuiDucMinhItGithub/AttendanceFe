import React from 'react'
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function roomDetail() {
  return (
    <div>
          <Container>
          <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Room
                </Breadcrumb.Item>
                <Breadcrumb.Item active>List Room</Breadcrumb.Item>
            </Breadcrumb>
            <Row className="vh-100 d-flex justify-content-center align-items-center">
              <Col md={8} lg={12} xs={12}>
                <Card className="px-4">
                  <Card.Body>
                    <div className="mb-3 mt-md-4">
                      <div className="mb-3">
                        <Form>
                          <Form.Group className="mb-3" controlId="Name">
                            <Form.Label className="text-center">Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" />
                          </Form.Group>
    
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="text-center">
                              Email address
                            </Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                          </Form.Group>
    
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                          >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                          >
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicCheckbox"
                          ></Form.Group>
                          <div className="d-grid">
                            <Button variant="primary" type="submit">
                              Create Account
                            </Button>
                            <Button variant="primary" type="submit">
                              Create Account
                            </Button>
                          </div>
                        </Form>
                        
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
  )
}

export default roomDetail