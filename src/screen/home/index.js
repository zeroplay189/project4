import Slider from 'infinite-react-carousel';
import { useState } from "react";
import {
  Container,
  Jumbotron,
  Button,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  NavbarText,
  DropdownItem,
  NavbarToggler,
  Nav,
  Collapse,
} from "reactstrap";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Container>
        <Jumbotron>
          <h1>Hello, world!</h1>
        </Jumbotron>
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">CHOMPU</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">หน้าแรก</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/components/">เกี่ยวกับ</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/components/">ติดต่อ</NavLink>
                </NavItem>
              </Nav>
              <NavbarText>Simple Text</NavbarText>
            </Collapse>
          </Navbar>
          <Slider dots autoplay >
    <div>
     <img src="https://www.cmru.ac.th/assets/images/banners/th/29-12-2020/355e723cf01db446a3ad5daa70225bb1901936d1.png" alt="รูป1"/>
    </div>
    <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
    </div>
    <div>
      <h3>5</h3>
    </div>
  </Slider>

        </div>

        <h1>Home page</h1>
      </Container>
    </div>
  );
};
export default Home;
