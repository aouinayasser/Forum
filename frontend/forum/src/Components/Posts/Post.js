import "./Post.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getOneCallCenterPost,
  getOneClientPost,
} from "../../redux/actions/PostAction";

export default function Post({ callPost, clientPost }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jobSeeker = useSelector(
    (state) => state.jobSeekerAuthReducer.jobSeekerIsAuth
  );
  const {clientIsAuth} = useSelector(state=>state.clientAuthReducer)

  return (
    <div className="row">
      <div className="col-lg">
        <div className="container-fluid d-flex justify-content-center">
          <div
            className="list list-row card"
            id="sortable"
            data-sortable-id={0}
            aria-dropeffect="move"
          >
            <div
              className="list-item"
              role="option"
              aria-grabbed="false"
              style={{}}
            >
              <div>
                <a data-abc="true">
                  <span className="w-40 avatar gd-primary">P</span>
                </a>
              </div>
              <div
                className="flex"
                onClick={() => {
                  {
                    jobSeeker || clientIsAuth
                      ? dispatch(getOneCallCenterPost(callPost._id))
                      : dispatch(getOneClientPost(clientPost._id));
                  }
                  navigate("/viewpost");
                }}
              >
                {" "}
                <a className="item-author text-color" data-abc="true">
                  {jobSeeker || clientIsAuth ? (
                    <p>
                      {callPost.CallCenter.firstname}{" "}
                      {callPost.CallCenter.lastname}{" "}
                    </p>
                  ) : (
                    <p>
                      {" "}
                      {clientPost.Client.firstname} {clientPost.Client.lastname}{" "}
                    </p>
                  )}
                </a>
                <div className="item-except text-muted text-sm h-1x">
                  {jobSeeker || clientIsAuth ? (
                    <p>{callPost.description}</p>
                  ) : (
                    <p> {clientPost.description} </p>
                  )}
                </div>
              </div>
              <div className="no-wrap">
                <div className="item-date text-muted text-sm d-none d-md-block">
                  3 weeks ago
                </div>
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
