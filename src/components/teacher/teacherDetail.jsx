import React from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import CartIcon from './image/class.jpg';
import { InputTextarea } from 'primereact/inputtextarea';
import { ConfirmDialog } from 'primereact/confirmdialog'; // For <ConfirmDialog /> component
import { confirmDialog } from 'primereact/confirmdialog'; // For confirmDialog method
import { useState } from 'react';
import { Calendar } from 'primereact/calendar';

function TeacherDetail() {
  const [address, setAddress] = useState("");
  const [date, setDate] = useState(0);
  const confirm = () => {
    confirmDialog({
        message: 'Are you sure you want to logout?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle'
    });
}
  return (
    <Container>
              <Row>
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
                                        <br/>
                                        <InputTextarea value={address} onChange={(e) => setAddress(e.target.value)} rows={5} cols={35} />
                                      </Form.Group>
                                    </div>
                                    <div className='col-lg-4 col-md-12 col-xs-12'>
                                        <Form.Group className="form-group mb-3" controlId="formBasicEmail">
                                          <Form.Label>Birthday</Form.Label>
                                          <br/>
                                          <Calendar value={date} onChange={(e) => setDate(e.value)} />
                                        </Form.Group>
                                      </div>
                                </div>
                                <div className='row'>
                                  
                                </div>
                                <Button variant="primary" type="submit">
                                Edit
                              </Button>
                              <Button onClick={confirm} icon="pi pi-check" label="Logout" variant='danger' style={{marginLeft:'10px'}}>Logout</Button>
                              <ConfirmDialog />
                              </div>
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

export default TeacherDetail