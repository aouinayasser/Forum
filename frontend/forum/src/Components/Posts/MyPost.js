import EditPost from "../EditPost/EditPost";
import DeletePost from "../DeletePost/DeletePost";
import "./Post.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getOneCallCenterPost,
  getOneClientPost,
} from "../../redux/actions/PostAction";

export default function MyPost({ callPost, clientPost }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const callcenter = useSelector(
    (state) => state.callCenterAuthReducer.callCenterIsAuth
  );

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
              data-id={13}
              data-item-sortable-id={0}
              draggable="true"
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
                    callcenter
                      ? dispatch(getOneCallCenterPost(callPost._id))
                      : dispatch(getOneClientPost(clientPost._id));
                  }
                  navigate("/viewpost");
                }}
              >
                {" "}
                <a className="item-author text-color" data-abc="true">
                  {callcenter ? (
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
                  {callcenter ? (
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
                
                  <div className="item-action dropdown">
                    {" "}
                    <a
                      data-toggle="dropdown"
                      className="text-muted"
                      data-abc="true"
                    >
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-more-vertical"
                      >
                        <circle cx={12} cy={12} r={1} />
                        <circle cx={12} cy={5} r={1} />
                        <circle cx={12} cy={19} r={1} />
                      </svg>{" "}
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-right bg-white"
                      role="menu"
                    >
                      <a className="dropdown-item edit" data-abc="true">
                        <EditPost callPost={callPost} clientPost={clientPost} />
                      </a>
                      <div className="dropdown-divider" />{" "}
                      <a className="dropdown-item trash" data-abc="true">
                        <DeletePost callPost={callPost} clientPost={clientPost} />
                      </a>
                    </div>
                  </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
