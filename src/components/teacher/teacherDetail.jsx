import React from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Calendar } from 'primereact/calendar';

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
                            <Form.Group className="form-group col-sm-6 flex-column d-flex mb-3" controlId="formBasicEmail">
                              <Form.Label>UserName</Form.Label>
                              <Form.Control type="name" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="form-group col-sm-6 flex-column d-flex mb-3" controlId="formBasicEmail">
                              <Form.Label>FullName</Form.Label>
                              <Form.Control type="name" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="form-group col-sm-6 flex-column d-flex mb-3" controlId="formBasicEmail">
                              <Form.Label>Password</Form.Label>
                              <Form.Control type="name" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="form-group col-sm-6 flex-column d-flex mb-3" controlId="formBasicEmail">
                              <Form.Label>Birthday</Form.Label>
                              <Calendar value='null' />
                            </Form.Group>
                            <Form.Group className="form-group col-sm-6 flex-column d-flex mb-3" controlId="formBasicEmail">
                              <Form.Label>Address</Form.Label>
                              <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="form-group col-sm-6 flex-column d-flex mb-3" controlId="Name">
                              <Form.Label>Phone Number</Form.Label>
                              <Form.Control type="text" placeholder="Enter Name" />
                            </Form.Group>
                            <Form.Group className="form-group col-sm-6 flex-column d-flex mb-3" controlId="formBasicEmail">
                              <Form.Label>Role</Form.Label>
                              <Form.Control type="name" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="form-group col-sm-6 flex-column d-flex mb-3" controlId="formBasicEmail">
                              <Form.Label>State</Form.Label>
                              <Form.Control type="name" placeholder="Enter email" />
                            </Form.Group>
                            <div>
                              <Button variant="primary" type="submit">
                                Edit information
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
  )
}

export default teacherDetail