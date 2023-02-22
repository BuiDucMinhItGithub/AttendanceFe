import React from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Calendar } from 'primereact/calendar';
import { Dialog } from 'primereact/dialog';
import CartIcon from './image/class.jpg';

function teacherDetail() {
  return (
    <Container>
            <Breadcrumb>
                  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                      Teacher
                  </Breadcrumb.Item>
                  <Breadcrumb.Item active>Teacher Detail</Breadcrumb.Item>
              </Breadcrumb>
              <Row className="vh-100">
                <Col md={8} lg={12} xs={12}>
                  <Card>
                    <Card.Body>
                      <div><h3>Teacher information</h3></div>
                      <div className="mb-3 mt-md-4">
                        <div className="mb-3">
                          <Form>
                            <div className='row'>
                              <div className='col-lg-4 col-md-12 col-xs-12'>
                                <Card.Img variant="top" src={CartIcon}/>
                              </div>
                              <div className='col-lg-8 col-md-12 col-xs-12'>
                                <div className='row'>
                                    <div className='col-lg-6 col-md-12 col-xs-12'>
                                      <Form.Group className="form-group mb-3" controlId="formBasicEmail">
                                        <Form.Label>FullName</Form.Label>
                                        <Form.Control type="name" placeholder="Enter email" />
                                      </Form.Group>
                                    </div>
                                    <div className='col-lg-6 col-md-12 col-xs-12'>
                                      <Form.Group className="form-group mb-3" controlId="formBasicEmail">
                                        <Form.Label>UserName</Form.Label>
                                        <Form.Control type="name" placeholder="Enter email" />
                                      </Form.Group>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-6 col-md-12 col-xs-12'>
                                      <Form.Group className="form-group mb-3" controlId="formBasicEmail">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control type="name" placeholder="Enter email" />
                                      </Form.Group>
                                    </div>
                                    <div className='col-lg-6 col-md-12 col-xs-12'>
                                      <Form.Group className="form-group mb-3" controlId="formBasicEmail">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="name" placeholder="Enter email" />
                                      </Form.Group>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-6 col-md-12 col-xs-12'>
                                      <Form.Group className="form-group mb-3" controlId="formBasicEmail">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control type="name" placeholder="Enter email" />
                                      </Form.Group>
                                    </div>
                                    <div className='col-lg-6 col-md-12 col-xs-12'>
                                      <Form.Group className="form-group mb-3" controlId="formBasicEmail">
                                        <Form.Label>State</Form.Label>
                                        <Form.Control type="name" placeholder="Enter email" />
                                      </Form.Group>
                                    </div>
                                </div>
                                <div className='row'>
                                  <div className='col-lg-4 col-md-12 col-xs-12'>
                                        <Form.Group className="form-group mb-3" controlId="formBasicEmail">
                                          <Form.Label>Birthday</Form.Label>
                                          <Form.Control type="name" placeholder="Enter email" />
                                        </Form.Group>
                                      </div>
                                      </div>
                                <Button variant="primary" type="submit">
                                Edit
                              </Button>
                              </div>
                            </div>
                            <div>
                              
                            </div>
                          </Form>
                        </div>
                      </div>
                      
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
          </Container>
  )
}

export default teacherDetail