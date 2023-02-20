import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function login() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  style = {{marginBottom: "50px"}}>
      <Container>
        <Navbar.Brand href="#home">OutSchool</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Room</Nav.Link>
            <Nav.Link href="#pricing">Student</Nav.Link>
            <Nav.Link href="#pricing">Attendance</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#memes">
              <Navbar.Text>
                Signed in as : <a href="#login">Bui Duc Minh</a>
              </Navbar.Text>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default login