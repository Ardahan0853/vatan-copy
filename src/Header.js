import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from "./Images/logo.png"

function Header(props) {
  return (
    <div className='navbar'>
      <Navbar className="navbar-top" collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><img className="vatan-logo" src={Image} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto Kategori">

              <NavDropdown title="Kategori" id="collasible-nav-dropdown">

                <NavDropdown.Item href="#action/3.1">Çok satan</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  İndirimler
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Elektronik</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Favoriler
                </NavDropdown.Item>
              </NavDropdown>

            </Nav>
            <form className='form-div'>
              <input className="input" type="text" placeholder="&#xf002;Ürün ara" style={{ fontFamily:"Arial, FontAwesome"}}></input>
            </form>
            <Nav>
              <Nav.Link>Profil  <i className="fa-solid fa-user"></i></Nav.Link>
              <Nav.Link>
                Sepetim  {<i className="fa-solid fa-cart-shopping"> </i>}{props.cart}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
      );
}

      export default Header;