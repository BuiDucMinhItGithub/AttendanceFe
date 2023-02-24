import React from 'react';
import { useState } from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


function RoomDetail() {
  const [selectedCity, setSelectedCity] = useState("oke");
  const cities = [
    { 
      'value': 'Open' 
    }, 
    { 
      'value': 'Close' 
    }
  ]
  return (
    <div>
          <Container>
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
                            <Form.Control type="name" defaultValue="Search..." placeholder="Enter email" />
                          </Form.Group>
                          <Form.Group className="form-group col-sm-6 flex-column d-flex mb-3" controlId="formBasicEmail">
                            <Form.Label>Number of student</Form.Label>
                            <Form.Control type="email" defaultValue="Search..." placeholder="Enter email" />
                          </Form.Group>
                          <Form.Group className="form-group col-sm-6 flex-column d-flex mb-3" controlId="Name">
                            <Form.Label>Price per lesson</Form.Label>
                            <Form.Control type="text" defaultValue="Search..." placeholder="Enter Name" />
                          </Form.Group>
                          <Form.Group className="form-group col-sm-6 flex-column d-flex mb-3" controlId="Name">
                            <Form.Label>Price per lesson</Form.Label>
                            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="value" 
                                placeholder="Select state" className="w-full md:w-14rem" />
                          </Form.Group>
                          <div>
                            <Button variant="primary" type="submit">
                              Edit room
                            </Button>
                          </div>
                        </Form>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <DataTable value="" paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}>
                    <Column field="name" header="Name" style={{ width: '25%' }}></Column>
                    <Column field="student.name" header="Option" style={{ width: '25%' }}></Column>
              </DataTable>
            </Row>
            
          </Container>
        </div>
  )
}

export default RoomDetail