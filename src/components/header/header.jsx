import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  style = {{marginBottom: "20px"}}>
      <Container>
        <Navbar.Brand href="/">OutSchool</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href= "/room">Room</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/teacherDetail">
              <Navbar.Text>
                Signed in as : <span >Bui Duc Minh</span>
              </Navbar.Text>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default header