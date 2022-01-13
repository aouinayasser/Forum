import EditPost from "../EditPost/EditPost";
import DeletePost from "../DeletePost/DeletePost"
import "./Post.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneCallCenterPost } from "../../redux/actions/PostAction";


export default function Post({callPost}) {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const jobSeeker=useSelector(state=>state.jobSeekerAuthReducer.jobSeekerIsAuth)
  return (
    <div className="row" >
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
                <a  data-abc="true">
                  <span className="w-40 avatar gd-primary">P</span>
                </a>
              </div>
              <div className="flex"  onClick={()=>{dispatch(getOneCallCenterPost(callPost._id));navigate('/viewpost')}}>
                {" "}
                <a  className="item-author text-color" data-abc="true">
                 {callPost.CallCenter.firstname} {callPost.CallCenter.lastname}
                </a>
                <div className="item-except text-muted text-sm h-1x">
                  {callPost.description}
                </div>
              </div>
              <div className="no-wrap">
                <div className="item-date text-muted text-sm d-none d-md-block">
                  3 weeks ago
                </div>
              </div>
              <div>
                
                  {
                    (!jobSeeker&&
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
                      </a><div className="dropdown-menu dropdown-menu-right bg-white" role="menu">
                    <a className="dropdown-item edit" data-abc="true">
                    <EditPost />
                    </a>
                  <div className="dropdown-divider" />{" "}
                  <a className="dropdown-item trash" data-abc="true">
                  <DeletePost />
                  </a>
                </div>
                </div>)
                  }
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
