import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <img
          src="https://raw.githubusercontent.com/vmmuthu31/JEC-SITE/master/public/JEC_logo.png"
          height={80}
          width={80}
          alt=""
        />
        <Navbar.Brand className="m-3" href="#home">
          <h3>
            {" "}
            Jaya Engineering <br /> College
          </h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <div>
            <div>
              <Nav className="Nav">
                <Nav.Link href="#deets">Career</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Research
                </Nav.Link>
                <Nav.Link>Industry</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Events
                </Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Admission
                </Nav.Link>
              </Nav>
            </div>
            <div>
              <Nav className="Nav">
                <Nav.Link>Home</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Academics
                </Nav.Link>
                <Nav.Link> Placement & Training</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Faculty
                </Nav.Link>

                <Nav.Link href="#">Students</Nav.Link>
              </Nav>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
