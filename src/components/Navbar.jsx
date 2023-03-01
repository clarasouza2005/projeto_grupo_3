import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';


function NavBar () {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
          <Container>
            <Navbar.Brand as={Link} to="/">

                CT Fitness

            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/planos">Planos</Nav.Link>
                <Nav.Link as={Link} to="/produtos">Suplementos</Nav.Link>
                <NavDropdown title="Outros" id="collasible-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/contato">contato</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/login">LogIn</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/delete">Deletar Usuário</NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}    

export default NavBar;