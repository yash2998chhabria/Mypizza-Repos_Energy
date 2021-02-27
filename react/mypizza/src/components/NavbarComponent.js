import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">My Pizza</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">File</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Edit</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">View</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Help</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Repos Energy</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;