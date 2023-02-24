import React from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { BsPencilFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import { Dialog } from 'primereact/dialog';
import {Card, Form } from 'react-bootstrap';
import CartIcon from './image/class.jpg';
import { Calendar } from 'primereact/calendar';
import axios from 'axios';

function RoomList() {
    const [visible, setVisible] = useState(false);
    const [date, setDate] = useState("");
    const saveProject = async (e) => {
      e.preventDefault();
      const name = e.target.elements.classname.value
      const pricePerLesson = e.target.elements.classprice.value
      const numberOfStudent = e.target.elements.numberOfStudent.value
      await axios.post("http://localhost:8080/api/v1/room", {
            name :name,
            pricePerLesson :pricePerLesson,
            numberOfStudent: numberOfStudent
      })
      .then((response) => {
        console.log(response);
      });
  };
    return (
        <Container>
            <div className="mb-2">
                <Button variant="danger" icon="pi pi-external-link" onClick={() => setVisible(true)}>Add room</Button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th className='iconOption'>NoS</th>
                    <th className='iconOption'>Option</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <th className='iconOption'>10</th>
                        <td className='iconOption'><a href="/roomDetail" rel="noopener noreferrer"><BsPencilFill className='icon'/></a></td>
                    </tr>
                </tbody>
            </Table>
            
            <Dialog header="Add new room" maximizable visible={visible} style={{ width: '75vw' }} onHide={() => setVisible(false)}>
                <div className="mb-3 mt-md-4">
                    <div className="mb-3">
                        <Form onSubmit={saveProject}>
                            <div className='row'>
                              <div className='col-lg-4 col-md-12 col-xs-12'>
                                <Card.Img variant="top" src={CartIcon}/>
                              </div>
                              <div className='col-lg-8 col-md-12 col-xs-12'>
                                <div className='row'>
                                    <div className='col-lg-6 col-md-12 col-xs-12'>
                                      <Form.Group className="form-group mb-3" controlId="formBasicEmail">
                                        <Form.Label>Name of Class</Form.Label>
                                        <Form.Control type="name" name='classname' placeholder="Enter name" />
                                      </Form.Group>
                                    </div>
                                    <div className='col-lg-6 col-md-12 col-xs-12'>
                                      <Form.Group className="form-group mb-3" controlId="formBasicEmail">
                                        <Form.Label>Price per Lesson</Form.Label>
                                        <Form.Control type="price" name='classprice' placeholder="Enter number" />
                                      </Form.Group>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-6 col-md-12 col-xs-12'>
                                      <Form.Group className="form-group mb-3" controlId="formBasicEmail">
                                        <Form.Label>Number of Student</Form.Label>
                                        <Form.Control type="numberOfStudent" name='numberOfStudent' placeholder="Enter number" />
                                      </Form.Group>
                                    </div>
                                </div>
                                <div className='row'>
                                  <div className='col-lg-4 col-md-12 col-xs-12'>
                                        <Form.Group className="form-group mb-3" controlId="formBasicEmail">
                                          <Form.Label>Start Date</Form.Label>
                                          <br/>
                                          <Calendar value={date} name='classStartDate' onChange={(e) => setDate(e.value)} />
                                        </Form.Group>
                                      </div>
                                      </div>
                                <Button variant="danger" type="submit">Add room</Button>
                              </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </Dialog>
        </Container>
      );
}

export default RoomList