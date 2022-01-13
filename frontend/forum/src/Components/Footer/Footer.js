import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import "./Footer.css";

export default function Footer(params) {
  return (
    <MDBFooter
      backgroundcolor="--mdb-yellow"
      className="text-center text-lg-left"
    >
      <MDBContainer className="p-4">
        <MDBRow>
          <MDBCol lg="6" md="12" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Footer Content</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              atque ea quis molestias. Fugiat pariatur maxime quis culpa
              corporis vitae repudiandae aliquam voluptatem veniam, est atque
              cumque eum delectus sint!
            </p>
          </MDBCol>

          <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a  className="text-light">
                  Link 1
                </a>
              </li>
              <li>
                <a  className="text-light">
                  Link 2
                </a>
              </li>
              <li>
                <a  className="text-light">
                  Link 3
                </a>
              </li>
              <li>
                <a  className="text-light">
                  Link 4
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0">Links</h5>

            <ul className="list-unstyled">
              <li>
                <a  className="text-light">
                  Link 1
                </a>
              </li>
              <li>
                <a  className="text-light">
                  Link 2
                </a>
              </li>
              <li>
                <a  className="text-light">
                  Link 3
                </a>
              </li>
              <li>
                <a  className="text-light">
                  Link 4
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundcolor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()}{" "}
        <a className="text-light">Yasser Aouina</a>
      </div>
    </MDBFooter>
  );
}
