import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
          <Form
            className="d-flex col-4"
            style={{ position: "absolute", marginLeft: "400px" }}
          >
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Container>
        <a href="#">
          <span
            style={{ marginRight: "15px" }}
            className="bi bi-box-arrow-right text-danger"
            aria-hidden="true"
          >
            &nbsp;&nbsp;Logout
          </span>
        </a>
      </Navbar>
    </div>
  );
}
