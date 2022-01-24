import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  callCenterLogout,
  clientLogout,
  jobSeekerLogout,
} from "../redux/actions/AuthAction";

const Navigation = () => {
  const dispatch = useDispatch();
  const { jobSeekerIsAuth } = useSelector(
    (state) => state.jobSeekerAuthReducer
  );
  const { callCenterIsAuth } = useSelector(
    (state) => state.callCenterAuthReducer
  );
  const { clientIsAuth } = useSelector((state) => state.clientAuthReducer);
  const navigate = useNavigate();
  const handleLogout = () => {
    jobSeekerIsAuth === true
      ? dispatch(jobSeekerLogout())
      : callCenterIsAuth === true
      ? dispatch(callCenterLogout())
      : dispatch(clientLogout());
  };
  return (
    <nav id="menu" className="navbar-home navbar-default navbar-fixed-top">
      <div className="home-container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            iCall
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul
            className="nav navbar-nav navbar-right"
            style={{ display: "inline-block" }}
          >
            <li>
              <a href="#features" className="page-scroll">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
            {jobSeekerIsAuth || callCenterIsAuth || clientIsAuth ? (
              <div className="nav-buttons">
                <a
                  onClick={() => {
                    handleLogout();
                    navigate("/login");
                  }}
                  className="btn-custom btn-lg"
                >
                  Logout
                </a>
              </div>
            ) : (
              <div className="nav-buttons">
                <a
                  onClick={() => navigate("/register")}
                  className="btn-custom btn-lg"
                >
                  Sign Up
                </a>
                <a
                  onClick={() => navigate("/login")}
                  className="btn-custom btn-lg"
                >
                  Sign In
                </a>
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
