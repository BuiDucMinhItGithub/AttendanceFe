import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Container } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { CascadeSelect } from 'primereact/cascadeselect';

function attendance() {
  return (
    <div>
        <Container>
        <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Attendance
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Room Attendance</Breadcrumb.Item>
            </Breadcrumb>
            <div><h3>Attendance of Math 12 - Teacher name here</h3></div>
            <br/>
            <DataTable value="" paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}>
                    <Column field="name" header="Name" style={{ width: '25%' }}></Column>
                    <Column field="student.name" header="Option" style={{ width: '25%' }}></Column>
            </DataTable>
        </Container>
        
    </div>
  )
}

export default attendance