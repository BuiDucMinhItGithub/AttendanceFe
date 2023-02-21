import React from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { BsPencilFill, BsFillTrashFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';

function roomList() {
    return (
        <Container>
            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Room
                </Breadcrumb.Item>
                <Breadcrumb.Item active>List Room</Breadcrumb.Item>
            </Breadcrumb>
            <div className="mb-2">
                <Button variant="danger" size="lg">
                Add Room
                </Button>{' '}
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th className='iconOption'>NoS</th>
                    <th className='iconOption'>Edit</th>
                    <th className='iconOption'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <th className='iconOption'>10</th>
                    <td className='iconOption'><BsPencilFill className='icon'/></td>
                    <td className='iconOption'><BsFillTrashFill className='icon'/></td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <th className='iconOption'>10</th>
                    <td className='iconOption'><BsPencilFill className='icon'/></td>
                    <td className='iconOption'><BsFillTrashFill className='icon'/></td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Larry the Bird</td>
                    <th className='iconOption'>10</th>
                    <td className='iconOption'><BsPencilFill className='icon'/></td>
                    <td className='iconOption'><BsFillTrashFill className='icon'/></td>
                    </tr>
                </tbody>
            </Table>
        </Container>
      );
}

export default roomList