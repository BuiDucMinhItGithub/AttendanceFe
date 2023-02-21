import React from 'react'
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Accordion from 'react-bootstrap/Accordion';
import { BsPencilFill, BsFillTrashFill } from "react-icons/bs";
import Table from 'react-bootstrap/Table';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputSwitch } from 'primereact/inputswitch';


function roomDetail() {
  return (
    <div>
          <Container>
          <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Room
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Room Detail</Breadcrumb.Item>
            </Breadcrumb>
            <Row className="vh-100">
              
              <Col md={8} lg={12} xs={12}>
                <Card>
                  <Card.Body>
                    <div><h3>Math 12 detail information</h3></div>
                    <div className="mb-3 mt-md-4">
                      <div className="mb-3">
                        <Form>
                          <Form.Group className="form-group col-sm-6 flex-column d-flex mb-3" controlId="formBasicEmail">
                            <Form.Label>Name of room</Form.Label>
                            <Form.Control type="name" placeholder="Enter email" />
                          </Form.Group>
                          <Form.Group className="form-group col-sm-6 flex-column d-flex mb-3" controlId="formBasicEmail">
                            <Form.Label>Number of student</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                          </Form.Group>
                          <Form.Group className="form-group col-sm-6 flex-column d-flex mb-3" controlId="Name">
                            <Form.Label>Price per lesson</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" />
                          </Form.Group>
                          <div>
                            <Button variant="primary" type="submit">
                              Edit room
                            </Button>
                            <Button variant="danger" style={{marginLeft: '20px'}} type="submit">
                              Delete room
                            </Button>
                          </div>
                        </Form>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <div><h3>List student of room</h3></div>
              <DataTable value="" paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}>
                    <Column field="name" header="Name" style={{ width: '25%' }}></Column>
                    <Column field="student.name" header="Option" style={{ width: '25%' }}></Column>
              </DataTable>
            </Row>
            
          </Container>
        </div>
  )
}

export default roomDetail