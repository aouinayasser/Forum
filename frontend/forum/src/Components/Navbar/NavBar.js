import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "./NavBar.css";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  callCenterLogout,
  clientLogout,
  jobSeekerLogout,
} from "../../redux/actions/AuthAction";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const jobSeeker = useSelector(
    (state) => state.jobSeekerAuthReducer.jobSeekerIsAuth
  );
  const callCenter = useSelector(
    (state) => state.callCenterAuthReducer.callCenterIsAuth
  );
  const client = useSelector((state) => state.clientAuthReducer.clientIsAuth);
  const handleLogout = () => {
    jobSeeker === true
      ? dispatch(jobSeekerLogout())
    : callCenter === true
      ? dispatch(callCenterLogout())
      : dispatch(clientLogout());
  };
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          {jobSeeker === true ? (
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            </Nav>
          ) : callCenter === true || client === true ? (
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/myposts">
                My posts
              </Nav.Link>
            </Nav>
          ) : (
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/myposts">
                My posts
              </Nav.Link>
            </Nav>
          )}
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
        <Button variant="outline-light">
          <span
            style={{ marginRight: "15px" }}
            className="bi bi-box-arrow-right text-danger"
            aria-hidden="true"
            onClick={() => {
              handleLogout();
              navigate('/')
            }}
          >
            &nbsp;&nbsp;Logout
          </span>
        </Button>
      </Navbar>
    </div>
  );
}
