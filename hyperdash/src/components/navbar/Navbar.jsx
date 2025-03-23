import { useState } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { Container, Navbar as BSNavbar, Nav, Offcanvas } from "react-bootstrap";

const StyledNavbar = styled(BSNavbar)`
  background-color: black;
  padding: 1rem;
`;

const NavLink = styled(Nav.Link)`
  color: white !important;
  position: relative;
  text-transform: none;
  padding-bottom: 5px;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0%;
    height: 2px;
    background-color: white;
    transition: width 0.3s ease-out;
  }

  &:hover::after {
    width: 100%;
  }

`;

const Logo = styled.img`
  height: 20px;
`;

const MenuIcon = styled(FaBars)`
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
`;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <StyledNavbar expand="md" fixed="top">
        <Container fluid>
          <Nav className="d-none d-md-flex gap-3">
            <NavLink href="#">Air X</NavLink>
            <NavLink href="#">Lexo Z</NavLink>
            <NavLink href="#">Gravity Z</NavLink>
          </Nav>

          <StyledNavbar.Brand className="mx-auto">
            <Logo src="/hyperx/Primary Logo.png" alt="Logo" />
          </StyledNavbar.Brand>

          <Nav className="d-flex align-items-center gap-3">
            <NavLink href="#" className="d-none d-md-inline">Shop</NavLink>
            <NavLink href="#" className="d-none d-md-inline">Account</NavLink>
            <MenuIcon onClick={() => setMenuOpen(true)} />
          </Nav>
        </Container>
      </StyledNavbar>
 
      <Offcanvas show={menuOpen} onHide={() => setMenuOpen(false)} placement="end" style={{ backgroundColor: "#333" }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-white">HyperDash</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <NavLink href="#">Shop</NavLink>
            <NavLink href="#">Account</NavLink>
            <NavLink href="#" className="d-md-none">Air X</NavLink>
            <NavLink href="#" className="d-md-none">Lexo Z</NavLink>
            <NavLink href="#" className="d-md-none">Gravity Z</NavLink>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
