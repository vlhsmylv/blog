import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import Link from "next/link";

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Link href="/">
            <a className="navbar-brand">
                Blog
            </a>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href="/">
                <a className="nav-link text-dark">
                    Home
                </a>
              </Link>
              <Link href="/#posts">
              <a className="nav-link text-dark">Last posts</a></Link>
              <Link href="/posts"><a className="nav-link text-dark">All posts</a></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar;