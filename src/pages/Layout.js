
import '../App.css';
import { Outlet, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
const Layout = () => {
  return (
    <>
      
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
          <Link to="/" className="custom-link">Home</Link>
          <Link to="/blogs" className="custom-link">Blogs</Link>
          <Link to="/contact" className="custom-link">Contact</Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
};

export default Layout;