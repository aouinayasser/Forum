import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  callCenterLogout,
  clientLogout,
  jobSeekerLogout,
} from "../../redux/actions/AuthAction";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
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
        </Container>
        <Button variant="danger" style={{ marginRight: "30px", width: "70px" }}>
          <span
            style={{ marginRight: "30px" }}
            className="bi bi-box-arrow-right text-light"
            aria-hidden="true"
            onClick={() => {
              handleLogout();
              navigate("/");
            }}
          >
            &nbsp;&nbsp;Logout
          </span>
        </Button>
      </Navbar>
    </div>
  );
}
